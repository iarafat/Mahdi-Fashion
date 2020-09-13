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
    
    #scalar Upload
    input ProductInput {
        type_id: String!
        category_id: String!
        name: String!
        description: String
        images: [String!]! # it should be Upload type
        unit: Int
        price: Float!
        sale_price: Float
        discount_in_percent: Int
        product_quantity: Int!
        meta_title: String
        meta_keyword: String
        meta_description: String
    }
    input ProductUpdateInput {
        type_id: String
        category_id: String
        name: String
        description: String
        images: [String] # it should be Upload type
        unit: Int
        price: Float
        sale_price: Float
        discount_in_percent: Int
        product_quantity: Int
        meta_title: String
        meta_keyword: String
        meta_description: String
    }
    type Product {
        id: ID!
        type_id: String!
        category_id: String!
        name: String!
        slug: String!
        description: String
        images: [String!]!
        unit: Int
        price: Float!
        sale_price: Float
        discount_in_percent: Int
        product_quantity: Int!
        meta_title: String
        meta_keyword: String
        meta_description: String
    }
    
    type DeliveryMethod {
        id: ID!
        name: String!
        details: String!
    }

    type Query {
        users: [User!]!
        types: [MainType!]!
        categories: [Category!]!
        products: [Product!]!
        delivery_methods: [DeliveryMethod!]!
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
        createProduct(input: ProductInput): Product!
        updateProduct(id: ID!, input: ProductUpdateInput): Product!
        deleteProduct(id: ID!): Product!
        createDeliveryMethod(name: String!, details: String!): DeliveryMethod!
        updateDeliveryMethod(id: ID!, name: String!, details: String!): DeliveryMethod!
        deleteDeliveryMethod(id: ID!): DeliveryMethod!
    }
`;