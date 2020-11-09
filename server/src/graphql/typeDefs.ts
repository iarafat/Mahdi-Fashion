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
        home_title: String!
        home_subtitle: String!
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
        home_title: String
        home_subtitle: String
        meta_title: String
        meta_keyword: String
        meta_description: String
        created_at: String
        updated_at: String
    }
    type MainTypePaginationType {
        items: [MainType]
        totalCount: Int
        hasMore: Boolean
    }
    
    input CategoryInput {
        type_id: String!
        parent_id: String
        name: String!
        banner_data: File
        banner: String
        icon: String!
        meta_title: String
        meta_keyword: String
        meta_description: String
    }
    type CategoryChildren {
        id: ID
        type_id: String
        name: String
        slug: String
        banner: String
        icon: String
    }
    type Category {
        id: ID!
        type_id: String
        parent_id: String
        name: String!
        slug: String!
        banner: String
        icon: String!
        children: [CategoryChildren]
        meta_title: String
        meta_keyword: String
        meta_description: String
        created_at: String
        updated_at: String
    }
    
    type CatetgoryPaginationType {
        items: [Category]
        totalCount: Int
        hasMore: Boolean
    }
    
    input ProductTypeInput {
        id: String
        name: String
        slug: String
    }
    input ProductInput {
        type: ProductTypeInput!
        categories: String!
        name: String!
        description: String
        images_data: String!
        images: [String!]!
        unit: String
        price: Float!
        sale_price: Float
        discount_in_percent: Int
        product_quantity: Int!
        meta_title: String
        meta_keyword: String
        meta_description: String
        is_featured: Boolean
    }
    input ProductUpdateInput {
        type: ProductTypeInput!
        categories: String!
        name: String
        description: String
        images_data: String
        images: [String]
        unit: String
        price: Float
        sale_price: Float
        discount_in_percent: Int
        product_quantity: Int
        meta_title: String
        meta_keyword: String
        meta_description: String
        is_featured: Boolean
    }
    
    type ProductCategory {
        id: String
        name: String
        slug: String
    }
    type ProductType {
        id: String
        name: String
        slug: String
    }
    type Product {
        id: ID!
        type: ProductType!
        categories: [ProductCategory]!
        name: String!
        slug: String!
        description: String
        images: [String!]!
        unit: String
        price: Float!
        sale_price: Float
        discount_in_percent: Int
        product_quantity: Int!
        meta_title: String
        meta_keyword: String
        meta_description: String
        is_featured: Boolean!
        created_at: String
        updated_at: String
    }
    type ProductPaginationType {
        items: [Product]
        totalCount: Int
        hasMore: Boolean
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
    
    type DefaultMessageType {
        message: String!
        status: Boolean!
    }
    
    type Setting {
        id: ID
        key: String
        value: String
    }

    type Query {
        users: [User!]!
        types(limit: Int = 12, offset: Int = 0, searchText: String): MainTypePaginationType!
        categories(type: String, limit: Int = 12, offset: Int = 0, searchText: String): CatetgoryPaginationType!
        shopCategories(type: String, limit: Int = 12, offset: Int = 0, searchText: String): CatetgoryPaginationType!
        products(type: String, category: String, limit: Int = 12, offset: Int = 0, searchText: String): ProductPaginationType!
        getProduct(slug: String!): Product!
        deliveryMethods: [DeliveryMethod!]!
        paymentOptions: [PaymentOption!]!
        orders: [Order!]
        getSetting(key: String!): Setting!
        getSiteSetting(key: String!): Setting!
        getUser(id: ID!): User!
    }
    
    type Mutation {
        login(phone: String!, password: String!): UserAuthPayload!
        signUp(phone: String!, password: String!): UserAuthPayload!
        createType(input: MainTypeInput): MainType!
        updateType(id: ID!, input: MainTypeInput): MainType!
        deleteType(id: ID!): DefaultMessageType!
        createCategory(input: CategoryInput): Category!
        updateCategory(id: ID!, input: CategoryInput): Category!
        deleteCategory(id: ID!): DefaultMessageType!
        createProduct(input: ProductInput): Product!
        updateProduct(id: ID!, input: ProductUpdateInput): Product!
        deleteProduct(id: ID!): DefaultMessageType!
        createDeliveryMethod(name: String!, details: String!): DeliveryMethod!
        updateDeliveryMethod(id: ID!, name: String!, details: String!): DeliveryMethod!
        deleteDeliveryMethod(id: ID!): DeliveryMethod!
        createPaymentOption(name: String!, type: String!, image: String!, details: String): PaymentOption!
        updatePaymentOption(id: ID!, name: String!, type: String!, image: String!, details: String): PaymentOption!
        deletePaymentOption(id: ID!): PaymentOption!
        createOrder(input: OrderInput): Order!
        updateSiteSetting(key: String!, value: String!): Setting!
        updateUserNameAndEmail(id: ID!, name: String!, email: String!): DefaultMessageType!
        addPhoneNumber(id: ID!, number: String!): DefaultMessageType!
        updatePhoneNumber(id: ID!, index: Int!, number: String!): DefaultMessageType!
        setPhoneNumberPrimary(id: ID!, index: Int!): DefaultMessageType!
        deletePhoneNumber(id: ID!, index: Int!): DefaultMessageType!
    }
`;