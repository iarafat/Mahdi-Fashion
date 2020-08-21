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

const accessToken = (id: any) => {
    const secret: any = process.env.JWT_SECRET;
  return jwt.sign({UserId: id}, secret, {expiresIn: "1d"})
};


export const usersResolvers: IResolvers = {
    Query: {
        users: async (
            _root: undefined,
            _args: undefined,
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
            const userResult = await db.users.findOne({"phones.number": phone});
            if (userResult) {
                throw new Error("User already registered.");
            }

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
        },
        login: async (
            _root: undefined,
            {phone, password}: { phone: string, password: string },
            {db}: { db: Database }
        ): Promise<IUserAuth> => {
            const userResult = await db.users.findOne({"phones.number": phone});

            if (!userResult) {
                throw new Error("User dose not exits.");
            }

            const validatePass = await validatePassword(password, userResult.password);
            if (!validatePass) {
                throw new Error("Password dose not match.")
            }

            return  {
                user: userResult,
                access_token: accessToken(userResult._id),
            }
        }
    },
}