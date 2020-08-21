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
    
    input SignupInput {
        phone: String!
        password: String!
    }
    
    input MainTypeInput {
        name: String!
        image: String!
        icon: String!
        meta_title: String
        meta_keyword: String
        meta_description: String
    }
    type MainType {
        id: ID!
        name: String!
        slug: String!
        image: String!
        icon: String!
        meta_title: String
        meta_keyword: String
        meta_description: String
    }
    
    type Query {
        users: [User!]!
        types: [MainType!]!
    }
    
    type Mutation {
        login(phone: String!, password: String!): UserAuth!
        signUp(phone: String!, password: String!): UserAuth!
        createType(input: MainTypeInput): MainType!
        updateType(id: ID!, input: MainTypeInput): MainType!
        deleteType(id: ID!): MainType!
    }
`;