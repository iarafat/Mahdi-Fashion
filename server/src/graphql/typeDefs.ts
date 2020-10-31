import {gql} from 'apollo-server-express';

export const typeDefs = gql`    
    input File {
        name: String!
        size: Int!
        type: String!
    }   
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
        image_data: File
        image: String
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
        created_at: String
        updated_at: String
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
    
    type PaymentOption {
        id: ID!
        name: String!
        type: String!
        image: String!
        details: String
    }
    
    type MainTypePaginationType {
        items: [MainType]
        totalCount: Int
        hasMore: Boolean
    }
    
    # Orders
    input OrderProductInput {
        product_id: String!
        quantity: Int!
        unit: String
        price: Int!
    }
    input OrderInput {
        customer_id: String!
        contact_number: String!
        payment_option_id: String!
        delivery_address: String!
        amount: Int!
        products: [OrderProductInput!]!
        payment_id:  String
    }
    
    type OrderTracker {
        status: String!
        ordering: Int!
        is_current: Boolean!
    }

    type OrderProducts {
        product_id: String!
        quantity: Int!
        unit: String
        price: Int!
    }
    
    type Order {
      id: ID!
      customer_id: String!
      contact_number: String!
      payment_option_id: String
      datetime: String
      delivery_address: String!
      amount: Int!
      payment_id:  String
      payment_method: String!
      payment_status: String!
      status: String!
      order_tracking: [OrderTracker]
      order_products: [OrderProducts]
      created_at: String
      updated_at: String
    }
    
    type DefaultDeleteType {
        message: String!
        status: Boolean!
    }

    type Query {
        users: [User!]!
        types(limit: Int = 12, offset: Int = 0, searchText: String): MainTypePaginationType!
        categories(limit: Int = 12, offset: Int = 0, searchText: String): [Category!]!
        products: [Product!]!
        deliveryMethods: [DeliveryMethod!]!
        paymentOptions: [PaymentOption!]!
        orders: [Order!]!
    }
    
    type Mutation {
        login(phone: String!, password: String!): UserAuthPayload!
        signUp(phone: String!, password: String!): UserAuthPayload!
        createType(input: MainTypeInput): MainType!
        updateType(id: ID!, input: MainTypeInput): MainType!
        deleteType(id: ID!): DefaultDeleteType!
        createCategory(input: CategoryInput): Category!
        updateCategory(id: ID!, input: CategoryInput): Category!
        deleteCategory(id: ID!): Category!
        createProduct(input: ProductInput): Product!
        updateProduct(id: ID!, input: ProductUpdateInput): Product!
        deleteProduct(id: ID!): Product!
        createDeliveryMethod(name: String!, details: String!): DeliveryMethod!
        updateDeliveryMethod(id: ID!, name: String!, details: String!): DeliveryMethod!
        deleteDeliveryMethod(id: ID!): DeliveryMethod!
        createPaymentOption(name: String!, type: String!, image: String!, details: String): PaymentOption!
        updatePaymentOption(id: ID!, name: String!, type: String!, image: String!, details: String): PaymentOption!
        deletePaymentOption(id: ID!): PaymentOption!
        createOrder(input: OrderInput): Order!
    }
`;