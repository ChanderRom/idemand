
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CoreLangDir {
    LTR = "LTR",
    RTL = "RTL"
}

export enum CoreSearchKeyLang {
    id = "id",
    iso6392 = "iso6392",
    iso6393 = "iso6393",
    ietf = "ietf"
}

export interface IdemandCreateRoomInput {
    id: string;
    type: GraphQLString;
    price: GraphQLString;
    date: GraphQLISODateTime;
}

export interface IdemandUpdateRoomByIdInput {
    id: string;
    type?: Nullable<GraphQLString>;
    price?: Nullable<GraphQLString>;
    date?: Nullable<GraphQLISODateTime>;
}

export interface IdemandUpdateRoomsInput {
    id?: Nullable<string>;
    type?: Nullable<GraphQLString>;
    price?: Nullable<GraphQLString>;
    date?: Nullable<GraphQLISODateTime>;
}

export interface QueryStatement {
    where?: Nullable<JSON>;
    attributes?: Nullable<JSON>;
    include?: Nullable<Nullable<GraphQLString>[]>;
    order?: Nullable<JSON>;
    group?: Nullable<JSON>;
    limit?: Nullable<GraphQLInt>;
    offset?: Nullable<GraphQLInt>;
    distinct?: Nullable<GraphQLBoolean>;
    col?: Nullable<GraphQLString>;
}

export interface IdemandRoom {
    id: string;
    type: GraphQLString;
    price: GraphQLString;
    date: GraphQLISODateTime;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IQuery {
    idemandFindRoom(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IdemandRoom> | Promise<Nullable<IdemandRoom>>;
    idemandFindRoomById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<IdemandRoom> | Promise<Nullable<IdemandRoom>>;
    idemandGetRooms(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IdemandRoom>[] | Promise<Nullable<IdemandRoom>[]>;
    idemandPaginateRooms(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    coreGetLangs(): Nullable<CoreLang>[] | Promise<Nullable<CoreLang>[]>;
    coreGetFallbackLang(): Nullable<CoreLang> | Promise<Nullable<CoreLang>>;
    coreGetSearchKeyLang(): Nullable<CoreSearchKeyLang> | Promise<Nullable<CoreSearchKeyLang>>;
    hello(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    idemandCreateRoom(payload: IdemandCreateRoomInput): Nullable<IdemandRoom> | Promise<Nullable<IdemandRoom>>;
    idemandCreateRooms(payload: Nullable<IdemandCreateRoomInput>[]): boolean | Promise<boolean>;
    idemandUpdateRoomById(payload: IdemandUpdateRoomByIdInput, constraint?: Nullable<QueryStatement>): Nullable<IdemandRoom> | Promise<Nullable<IdemandRoom>>;
    idemandUpdateRooms(payload: IdemandUpdateRoomsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IdemandRoom>[] | Promise<Nullable<IdemandRoom>[]>;
    idemandUpsertRoom(payload: IdemandUpdateRoomByIdInput): Nullable<IdemandRoom> | Promise<Nullable<IdemandRoom>>;
    idemandDeleteRoomById(id: string, constraint?: Nullable<QueryStatement>): Nullable<IdemandRoom> | Promise<Nullable<IdemandRoom>>;
    idemandDeleteRooms(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<IdemandRoom>[] | Promise<Nullable<IdemandRoom>[]>;
}

export interface CoreLang {
    id: GraphQLString;
    name: GraphQLString;
    image?: Nullable<GraphQLString>;
    iso6392: GraphQLString;
    iso6393: GraphQLString;
    ietf: GraphQLString;
    customCode?: Nullable<GraphQLString>;
    dir: CoreLangDir;
    sort?: Nullable<GraphQLInt>;
    isActive: GraphQLBoolean;
    createdAt?: Nullable<GraphQLString>;
    updatedAt?: Nullable<GraphQLString>;
    deletedAt?: Nullable<GraphQLString>;
}

export interface Pagination {
    total: GraphQLInt;
    count: GraphQLInt;
    rows: Nullable<JSON>[];
}

export type JSON = any;
export type Any = any;
export type Upload = any;
export type GraphQLString = any;
export type GraphQLInt = any;
export type GraphQLFloat = any;
export type GraphQLBoolean = any;
export type GraphQLISODateTime = any;
export type GraphQLTimestamp = any;
type Nullable<T> = T | null;
