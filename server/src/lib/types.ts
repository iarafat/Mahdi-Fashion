import {Collection, ObjectId} from 'mongodb';

interface Phone {
    number: string,
    status?: boolean,
    is_primary?: boolean
}
interface Address {
    title: string,
    address: string,
    division?: string,
    district?: string,
    region?: string,
    is_primary?: boolean
}

export interface IUser {
    _id?: ObjectId;
    name?: string;
    email?: string;
    password: string;
    phones?: [Phone];
    delivery_address?: [Address]
    created_at: string;
}

export interface IUserAuth {
    user: IUser;
    access_token: string;
}

export interface IType {
    _id?: ObjectId;
    name: string;
    slug?: string;
    image: string;
    icon: string;
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
    created_at?: string;
}

export interface ICategory {
    _id?: ObjectId;
    parent_id?: string;
    name: string;
    slug?: string;
    banner: string;
    icon: string;
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
    created_at?: string;
}

export interface IProduct {
    _id?: ObjectId;
    type_id: string;
    category_id: string;
    name: string;
    slug?: string;
    description?: string;
    images: [string];
    unit?: number;
    price: number;
    sale_price?: number;
    discount_in_percent?: number;
    product_quantity: number;
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
    created_at?: string;
    updated_at?: string;
}

export interface Database {
    users: Collection<IUser>
    types: Collection<IType>
    categories: Collection<ICategory>
    products: Collection<IProduct>
}