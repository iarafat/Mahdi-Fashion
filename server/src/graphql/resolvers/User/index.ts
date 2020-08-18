import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Database, IUser, IUserAuth} from "../../../lib/types";

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
        )/*: Promise<IUser>*/ => {
            const user: IUser = {
                _id: new ObjectId(),
                password: password,
                phones: [{number: phone}],
                created_at: new Date().toTimeString(),
            };
            const userResult = await db.users.insertOne(user);

            if (!userResult.ops) {
                throw new Error("Failed to sign up");
            }

            return userResult.ops;
        }
    },

    /*User: {
        id: (user: IUser): string => user._id.toString()
    }*/
}