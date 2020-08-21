import {gql} from 'apollo-server-express';

export const typeDefs = gql`
    type Phone {
        number: String!
        status: Boolean
        is_primary: Boolean
    }
    type DeliveryAddress {
        title: String
        address: String 
        division: String 
        district: String
        region: String 
        is_primary: Boolean
    }
    
    type User {
        id: ID!
        name: String
        email: String
        password: String!
        phones: [Phone]
        delivery_address: [DeliveryAddress]
        created_at: String
    }
    
    type UserAuth  {
        user: User!
        access_token: String!
    }
    
    type Query {
        users: [User!]!
    }
    
    type Mutation {
        login(phone: String!, password: String!): UserAuth!
        signUp(phone: String!, password: String!): UserAuth!
    }
`;