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
package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/warden-protocol/wardenprotocol/x/intent/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdActionsByAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "actions-by-address [address] --status [status]",
		Short: "Query Actions by address",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			status, err := cmd.Flags().GetString("status")
			if err != nil {
				return err
			}

			var statusEnum types.ActionStatus
			if status != "" {
				switch status {
				case "pending":
					statusEnum = types.ActionStatus_ACTION_STATUS_PENDING
				case "completed":
					statusEnum = types.ActionStatus_ACTION_STATUS_COMPLETED
				case "revoked":
					statusEnum = types.ActionStatus_ACTION_STATUS_REVOKED
				}
			}

			params := &types.QueryActionsByAddressRequest{
				Address: args[0],
				Status:  statusEnum,
			}

			res, err := queryClient.ActionsByAddress(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	cmd.Flags().String("status", "", "status of the action (pending, completed, revoked)")
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
