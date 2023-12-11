import gql from 'graphql-tag';

export const fields = `
    name
    totalRooms
    bookedRooms
    createdAt
    updatedAt
`;

export const relationsFields = `
`;

// default methods
export const paginationQuery = gql`
    query IdemandPaginateHotels (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        pagination: idemandPaginateHotels (
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
    query IdemandGetHotels (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        objects: idemandGetHotels (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findByIdQuery = gql`
    query IdemandFindHotelById (
        $id: ID
        $constraint: QueryStatement
    ) {
        object: idemandFindHotelById (
            id: $id
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findQuery = gql`
    query IdemandFindHotel (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        object: idemandFindHotel (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const createMutation = gql`
    mutation IdemandCreateHotel (
        $payload: IdemandCreateHotelInput!
    ) {
        idemandCreateHotel (
            payload: $payload
        ) {
            ${fields}
        }
    }
`;

export const updateByIdMutation = gql`
    mutation IdemandUpdateHotelById (
        $payload: IdemandUpdateHotelByIdInput!
        $constraint: QueryStatement
    ) {
        idemandUpdateHotelById (
            payload: $payload
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const updateMutation = gql`
    mutation IdemandUpdateHotels (
        $payload: IdemandUpdateHotelsInput!
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        idemandUpdateHotels (
            payload: $payload
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteByIdMutation = gql`
    mutation IdemandDeleteHotelById (
        $id: ID!
        $constraint: QueryStatement
    ) {
        idemandDeleteHotelById (
            id: $id
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteMutation = gql`
    mutation IdemandDeleteHotels (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        idemandDeleteHotels (
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;
