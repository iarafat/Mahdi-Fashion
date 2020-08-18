import {Collection, ObjectId} from 'mongodb';

export interface IUser {
    _id?: ObjectId;
    name?: string;
    email?: string;
    password: string;
    phones?: [{ number: string, status?: boolean, is_primary?: boolean }];
    delivery_address?: [{ title: string, address: string, division?: string, district?: string, region?: string, is_primary: boolean }]
    created_at: string;
}

export interface IUserAuth extends IUser{
    access_token: string;
}

export interface Database {
    users: Collection<IUser>
}