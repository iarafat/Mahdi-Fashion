import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Database, IUser, IUserAuth} from "../../../lib/types";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10)
};

const validatePassword = async (plainPassword: string, hashPassword: string) => {
  return await bcrypt.compare(plainPassword, hashPassword);
};

const accessToken = (id: ObjectId) => {
    const secret: any = process.env.JWT_SECRET;
  return jwt.sign({UserId: id}, secret, {expiresIn: "1d"})
};


export const usersResolvers: IResolvers = {
    Query: {
        users: async (
            _root: undefined,
            _args: {},
            {db}: { db: Database }
        ): Promise<IUser[]> => {
            return await db.users.find({}).toArray();
        }
    },

    Mutation: {
        signUp: async (
            _root: undefined,
            {phone, password}: { phone: string, password: string },
            {db}: { db: Database }
        ): Promise<IUserAuth> => {

            const address = {
                title: "",
                address: "",
                division: "",
                district: "",
                region: "",
                is_primary: false,
            }

            const user: IUser = {
                _id: new ObjectId(),
                name: "",
                email: "",
                password: await hashPassword(password),
                phones: [{number: phone, status: false, is_primary: false}],
                delivery_address: [address],
                created_at: new Date().toString(),
            };


            const insertResult = await db.users.insertOne(user);
            const insertedUser = insertResult.ops[0];
            return  {
                user: insertedUser,
                access_token: accessToken(insertedUser._id),
            }
        }
    },

    /*User: {
        id: (user: IUser): string => user._id.toString()
    }*/
}