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

export interface Database {
    users: Collection<IUser>
}