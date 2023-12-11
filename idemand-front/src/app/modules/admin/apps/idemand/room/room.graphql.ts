import gql from 'graphql-tag';

export const fields = `
    type
    createdAt
    updatedAt
`;

export const relationsFields = `
`;

// default methods
export const paginationQuery = gql`
    query IdemandPaginateRooms (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        pagination: idemandPaginateRooms (
            query: $query
            constraint: $constraint
        ) {
            total
            rows
            count
        }
    }
`;

export const getQuery = gql`
    query IdemandGetRooms (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        objects: idemandGetRooms (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findByIdQuery = gql`
    query IdemandFindRoomById (
        $id: ID
        $constraint: QueryStatement
    ) {
        object: idemandFindRoomById (
            id: $id
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findQuery = gql`
    query IdemandFindRoom (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        object: idemandFindRoom (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const createMutation = gql`
    mutation IdemandCreateRoom (
        $payload: IdemandCreateRoomInput!
    ) {
        idemandCreateRoom (
            payload: $payload
        ) {
            ${fields}
        }
    }
`;

export const updateByIdMutation = gql`
    mutation IdemandUpdateRoomById (
        $payload: IdemandUpdateRoomByIdInput!
        $constraint: QueryStatement
    ) {
        idemandUpdateRoomById (
            payload: $payload
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const updateMutation = gql`
    mutation IdemandUpdateRooms (
        $payload: IdemandUpdateRoomsInput!
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        idemandUpdateRooms (
            payload: $payload
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteByIdMutation = gql`
    mutation IdemandDeleteRoomById (
        $id: ID!
        $constraint: QueryStatement
    ) {
        idemandDeleteRoomById (
            id: $id
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteMutation = gql`
    mutation IdemandDeleteRooms (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        idemandDeleteRooms (
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;
