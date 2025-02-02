// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file wardenprotocol/identity/query.proto (package wardenprotocol.identity, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Space } from "./space_pb.js";
import { Keychain } from "./keychain_pb.js";

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message wardenprotocol.identity.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message wardenprotocol.identity.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: wardenprotocol.identity.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.QuerySpacesRequest
 */
export class QuerySpacesRequest extends Message<QuerySpacesRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QuerySpacesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QuerySpacesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpacesRequest {
    return new QuerySpacesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpacesRequest {
    return new QuerySpacesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpacesRequest {
    return new QuerySpacesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySpacesRequest | PlainMessage<QuerySpacesRequest> | undefined, b: QuerySpacesRequest | PlainMessage<QuerySpacesRequest> | undefined): boolean {
    return proto3.util.equals(QuerySpacesRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.QuerySpacesResponse
 */
export class QuerySpacesResponse extends Message<QuerySpacesResponse> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 1;
   */
  pagination?: PageResponse;

  /**
   * @generated from field: repeated wardenprotocol.identity.Space spaces = 2;
   */
  spaces: Space[] = [];

  constructor(data?: PartialMessage<QuerySpacesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QuerySpacesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageResponse },
    { no: 2, name: "spaces", kind: "message", T: Space, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpacesResponse {
    return new QuerySpacesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpacesResponse {
    return new QuerySpacesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpacesResponse {
    return new QuerySpacesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySpacesResponse | PlainMessage<QuerySpacesResponse> | undefined, b: QuerySpacesResponse | PlainMessage<QuerySpacesResponse> | undefined): boolean {
    return proto3.util.equals(QuerySpacesResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.QuerySpacesByOwnerRequest
 */
export class QuerySpacesByOwnerRequest extends Message<QuerySpacesByOwnerRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  /**
   * @generated from field: string owner = 2;
   */
  owner = "";

  constructor(data?: PartialMessage<QuerySpacesByOwnerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QuerySpacesByOwnerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpacesByOwnerRequest {
    return new QuerySpacesByOwnerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpacesByOwnerRequest {
    return new QuerySpacesByOwnerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpacesByOwnerRequest {
    return new QuerySpacesByOwnerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySpacesByOwnerRequest | PlainMessage<QuerySpacesByOwnerRequest> | undefined, b: QuerySpacesByOwnerRequest | PlainMessage<QuerySpacesByOwnerRequest> | undefined): boolean {
    return proto3.util.equals(QuerySpacesByOwnerRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.QueryKeychainsRequest
 */
export class QueryKeychainsRequest extends Message<QueryKeychainsRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryKeychainsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QueryKeychainsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeychainsRequest {
    return new QueryKeychainsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeychainsRequest {
    return new QueryKeychainsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeychainsRequest {
    return new QueryKeychainsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeychainsRequest | PlainMessage<QueryKeychainsRequest> | undefined, b: QueryKeychainsRequest | PlainMessage<QueryKeychainsRequest> | undefined): boolean {
    return proto3.util.equals(QueryKeychainsRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.QueryKeychainsResponse
 */
export class QueryKeychainsResponse extends Message<QueryKeychainsResponse> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 1;
   */
  pagination?: PageResponse;

  /**
   * @generated from field: repeated wardenprotocol.identity.Keychain keychains = 2;
   */
  keychains: Keychain[] = [];

  constructor(data?: PartialMessage<QueryKeychainsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QueryKeychainsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageResponse },
    { no: 2, name: "keychains", kind: "message", T: Keychain, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeychainsResponse {
    return new QueryKeychainsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeychainsResponse {
    return new QueryKeychainsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeychainsResponse {
    return new QueryKeychainsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeychainsResponse | PlainMessage<QueryKeychainsResponse> | undefined, b: QueryKeychainsResponse | PlainMessage<QueryKeychainsResponse> | undefined): boolean {
    return proto3.util.equals(QueryKeychainsResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.QuerySpaceByAddressRequest
 */
export class QuerySpaceByAddressRequest extends Message<QuerySpaceByAddressRequest> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<QuerySpaceByAddressRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QuerySpaceByAddressRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpaceByAddressRequest {
    return new QuerySpaceByAddressRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpaceByAddressRequest {
    return new QuerySpaceByAddressRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpaceByAddressRequest {
    return new QuerySpaceByAddressRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySpaceByAddressRequest | PlainMessage<QuerySpaceByAddressRequest> | undefined, b: QuerySpaceByAddressRequest | PlainMessage<QuerySpaceByAddressRequest> | undefined): boolean {
    return proto3.util.equals(QuerySpaceByAddressRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.QuerySpaceByAddressResponse
 */
export class QuerySpaceByAddressResponse extends Message<QuerySpaceByAddressResponse> {
  /**
   * @generated from field: wardenprotocol.identity.Space space = 1;
   */
  space?: Space;

  constructor(data?: PartialMessage<QuerySpaceByAddressResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QuerySpaceByAddressResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "space", kind: "message", T: Space },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpaceByAddressResponse {
    return new QuerySpaceByAddressResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpaceByAddressResponse {
    return new QuerySpaceByAddressResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpaceByAddressResponse {
    return new QuerySpaceByAddressResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySpaceByAddressResponse | PlainMessage<QuerySpaceByAddressResponse> | undefined, b: QuerySpaceByAddressResponse | PlainMessage<QuerySpaceByAddressResponse> | undefined): boolean {
    return proto3.util.equals(QuerySpaceByAddressResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.QueryKeychainByAddressRequest
 */
export class QueryKeychainByAddressRequest extends Message<QueryKeychainByAddressRequest> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<QueryKeychainByAddressRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QueryKeychainByAddressRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeychainByAddressRequest {
    return new QueryKeychainByAddressRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeychainByAddressRequest {
    return new QueryKeychainByAddressRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeychainByAddressRequest {
    return new QueryKeychainByAddressRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeychainByAddressRequest | PlainMessage<QueryKeychainByAddressRequest> | undefined, b: QueryKeychainByAddressRequest | PlainMessage<QueryKeychainByAddressRequest> | undefined): boolean {
    return proto3.util.equals(QueryKeychainByAddressRequest, a, b);
  }
}

/**
 * @generated from message wardenprotocol.identity.QueryKeychainByAddressResponse
 */
export class QueryKeychainByAddressResponse extends Message<QueryKeychainByAddressResponse> {
  /**
   * @generated from field: wardenprotocol.identity.Keychain keychain = 1;
   */
  keychain?: Keychain;

  constructor(data?: PartialMessage<QueryKeychainByAddressResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.identity.QueryKeychainByAddressResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "keychain", kind: "message", T: Keychain },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryKeychainByAddressResponse {
    return new QueryKeychainByAddressResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryKeychainByAddressResponse {
    return new QueryKeychainByAddressResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryKeychainByAddressResponse {
    return new QueryKeychainByAddressResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryKeychainByAddressResponse | PlainMessage<QueryKeychainByAddressResponse> | undefined, b: QueryKeychainByAddressResponse | PlainMessage<QueryKeychainByAddressResponse> | undefined): boolean {
    return proto3.util.equals(QueryKeychainByAddressResponse, a, b);
  }
}

