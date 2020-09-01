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
        phones: [Phone]
        delivery_address: [DeliveryAddress]
        created_at: String
    }
    
    type UserAuthPayload  {
        user: User!
        access_token: String!
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


    input CategoryInput {
        parent_id: String
        name: String!
        banner: String!
        icon: String!
        meta_title: String
        meta_keyword: String
        meta_description: String
    }
    type Category {
        id: ID!
        parent_id: String!
        name: String!
        slug: String!
        banner: String!
        icon: String!
        meta_title: String
        meta_keyword: String
        meta_description: String
    }

    type Query {
        users: [User!]!
        types: [MainType!]!
        categories: [Category!]!
    }
    
    type Mutation {
        login(phone: String!, password: String!): UserAuthPayload!
        signUp(phone: String!, password: String!): UserAuthPayload!
        createType(input: MainTypeInput): MainType!
        updateType(id: ID!, input: MainTypeInput): MainType!
        deleteType(id: ID!): MainType!
        createCategory(input: CategoryInput): Category!
        updateCategory(id: ID!, input: CategoryInput): Category!
        deleteCategory(id: ID!): Category!
    }
`;