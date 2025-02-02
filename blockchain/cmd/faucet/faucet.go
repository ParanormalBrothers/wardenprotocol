// Copyright 2024
//
// This file includes work covered by the following copyright and permission notices:
//
// Copyright 2023 Qredo Ltd.
// Licensed under the Apache License, Version 2.0;
//
// This file is part of the Warden Protocol library.
//
// The Warden Protocol library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// You should have received a copy of the GNU Lesser General Public License
// along with the Warden Protocol library. If not, see https://github.com/warden-protocol/wardenprotocol/blob/main/LICENSE
package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"time"
)

func main() {
	cfg := ConfigFromEnv()
	client, err := NewClient(context.Background(), cfg)
	if err != nil {
		panic(fmt.Sprintf("couldn't setup client: %s", err))
	}

	srv := &http.Server{
		Addr:         ":8000",
		Handler:      faucetHandler(client),
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	log.Println("Listening on http://localhost:8000")
	if err := srv.ListenAndServe(); !errors.Is(err, http.ErrServerClosed) {
		panic(err)
	}
}

type Config struct {
	CliName        string
	ChainID        string
	KeychainBackend string
	Node           string
	SendDenom      string
	AccountName    string
	Mnemonic       string
	HDPath         string
	GasPrices      string
	OtherFlags     string
}

func ConfigFromEnv() Config {
	return Config{
		CliName:        envOrDefault("CLI_NAME", "wardend"),
		ChainID:        envOrDefault("CHAIN_ID", "wardenprotocol_121-1"),
		KeychainBackend: envOrDefault("KEYRING_BACKEND", "test"),
		Node:           envOrDefault("NODE", "http://localhost:26657"),
		SendDenom:      envOrDefault("DENOM", "10000000000nward"),
		AccountName:    envOrDefault("ACCOUNT_NAME", "shulgin"),
		Mnemonic:       envOrDefault("MNEMONIC", ""),
		HDPath:         envOrDefault("HD_PATH", "m/44'/60'/0'/0/0"),
		GasPrices:      envOrDefault("GAS_PRICES", "1000000000nward"),
		OtherFlags:     envOrDefault("OTHER_FLAGS", ""),
	}
}

type Client struct {
	cfg Config
}

func NewClient(ctx context.Context, cfg Config) (*Client, error) {
	c := &Client{
		cfg: cfg,
	}

	if err := c.setupConfig(ctx); err != nil {
		return nil, err
	}

	if cfg.Mnemonic != "" {
		if err := c.setupNewAccount(ctx); err != nil {
			return nil, err
		}
	}

	return c, nil
}

func (c *Client) baseCmd() string {
	// Build a string like this:
	// wardend --node tcp://localhost:26657 --fees 20nward
	return strings.Join([]string{
		c.cfg.CliName,
		"--node",
		c.cfg.Node,
		"--gas-prices",
		c.cfg.GasPrices,
		"--from",
		c.cfg.AccountName,
	}, " ")
}

func (c *Client) setupNewAccount(ctx context.Context) error {
	// echo $mnemonic | $baseCmd keys add $SK1 --recover
	cmd := strings.Join([]string{
		"echo",
		c.cfg.Mnemonic,
		"|",
		c.baseCmd(),
		"keys",
		"add",
		c.cfg.AccountName,
		"--recover",
	}, " ")
	return e(ctx, cmd)
}

func (c *Client) setupConfig(ctx context.Context) error {
	// wardend config keyring-backend $KEYCHAIN
	cmd := strings.Join([]string{
		c.baseCmd(),
		"config",
		"keyring-backend",
		c.cfg.KeychainBackend,
	}, " ")
	if err := e(ctx, cmd); err != nil {
		return err
	}

	// wardend config chain-id $CHAINID
	cmd = strings.Join([]string{
		c.baseCmd(),
		"config",
		"chain-id",
		c.cfg.ChainID,
	}, " ")
	if err := e(ctx, cmd); err != nil {
		return err
	}

	return nil
}

func (c *Client) Send(ctx context.Context, dest string) error {
	// $baseCmd tx bank send shulgin warden1f6zkpwezlw58mssh0qat8d0dvwu3qpw67p83za 100000000nward --yes
	cmd := strings.Join([]string{
		c.baseCmd(),
		"tx",
		"bank",
		"send",
		c.cfg.AccountName,
		dest,
		c.cfg.SendDenom,
		"--yes",
	}, " ")
	return e(ctx, cmd)
}

func e(ctx context.Context, cmd string) error {
	cccc := exec.CommandContext(ctx, "sh", "-c", cmd)
	output, err := cccc.Output()
	var exitErr *exec.ExitError
	if errors.As(err, &exitErr) {
		log.Println(string(output), string(exitErr.Stderr))
	}
	return err
}

func faucetHandler(c *Client) http.HandlerFunc {
	type Req struct {
		Address string `json:"address"`
	}
	return func(w http.ResponseWriter, r *http.Request) {
		req := &Req{}
		if err := json.NewDecoder(r.Body).Decode(req); err != nil {
			http.Error(w, fmt.Sprintf("error decoding request: %v", err), http.StatusBadRequest)
			return
		}
		if err := c.Send(r.Context(), req.Address); err != nil {
			http.Error(w, fmt.Sprintf("error executing cmd: %v", err), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.WriteHeader(http.StatusOK)
		if _, err := w.Write([]byte("OK")); err != nil {
			http.Error(w, fmt.Sprintf("error writing response: %v", err), http.StatusInternalServerError)
			return
		}
	}
}

func envOrDefault(key, defaultValue string) string {
	v := os.Getenv(key)
	if v == "" {
		return defaultValue
	}
	return v
}
