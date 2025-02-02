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
package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/warden-protocol/wardenprotocol/testutil/keeper"
	"github.com/warden-protocol/wardenprotocol/x/identity/keeper"
	"github.com/warden-protocol/wardenprotocol/x/identity/types"
)

func TestKeeper_Keychains(t *testing.T) {

	type args struct {
		req          *types.QueryKeychainsRequest
		msgKeychain   *types.MsgNewKeychain
		keychainCount int
	}
	tests := []struct {
		name    string
		args    args
		want    int
		wantErr bool
	}{
		{
			name: "create 100 keychains",
			args: args{
				req: &types.QueryKeychainsRequest{
					Pagination: nil,
				},
				msgKeychain:   types.NewMsgNewKeychain("testCreator", "testDescription", 0, 0, 0),
				keychainCount: 100,
			},
			want:    100,
			wantErr: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			ik, ctx := keepertest.IdentityKeeper(t)
			goCtx := sdk.WrapSDKContext(ctx)
			for i := 0; i < tt.args.keychainCount; i++ {
				msgSer := keeper.NewMsgServerImpl(*ik)
				_, err := msgSer.NewKeychain(goCtx, tt.args.msgKeychain)
				if err != nil {
					t.Fatal(err)
				}
			}
			got, err := ik.Keychains(goCtx, tt.args.req)
			if (err != nil) != tt.wantErr {
				t.Errorf("Keychains() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if len(got.Keychains) != tt.want {
				t.Errorf("Keychains() got = %v, want %v", got, tt.want)
				return
			}
		})
	}
}
