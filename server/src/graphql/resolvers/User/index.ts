import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {Database, ICommonMessageReturnType, IUser, IUserAuth} from "../../../lib/types";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import {authorize} from "../../../lib/utils";

const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10)
};

const validatePassword = async (plainPassword: string, hashPassword: string) => {
    return await bcrypt.compare(plainPassword, hashPassword);
};

const accessToken = (id: any) => {
    const secret = <string>process.env.JWT_SECRET;
    return jwt.sign({UserId: id}, secret, {expiresIn: "1d"})
};


export const usersResolvers: IResolvers = {
    Query: {
        users: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<IUser[]> => {
            await authorize(req, db);
            return await db.users.find({}).toArray();
        },
        getUser: async (
            _root: undefined,
            {id}: { id: string},
            {db, req}: { db: Database, req: Request }
        ): Promise<IUser> => {
            await authorize(req, db);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return await db.users.findOne({_id: new ObjectId(id)});
        },
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
                phones: [{number: phone, status: false, is_primary: true}],
                delivery_address: [address],
                created_at: new Date().toString(),
            };

            const insertResult = await db.users.insertOne(user);
            const insertedUser = insertResult.ops[0];
            return {
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

            return {
                user: userResult,
                access_token: accessToken(userResult._id),
            }
        },
        updateUserNameAndEmail: async (
            _root: undefined,
            {id, name, email}: { id: string, name: string, email: string},
            {db}: { db: Database }
        ): Promise<ICommonMessageReturnType> => {
            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User dose not exits.");
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {name: name, email: email}}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return {
                status: true,
                message: "Updated successfully."
            };
        },
        addPhoneNumber: async (
            _root: undefined,
            {id, number}: { id: string, number: string},
            {db}: { db: Database }
        ): Promise<ICommonMessageReturnType> => {
            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User dose not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.phones.length == 2) {
                throw new Error("Already added two phone numbers. You are not allowed to add more than two numbers.");
            }


            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$push: {phones: {number: number, status: false, is_primary: false} }}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return {
                status: true,
                message: "Added successfully."
            };
        },
        updatePhoneNumber: async (
            _root: undefined,
            {id, index, number}: { id: string, index: number, number: string},
            {db}: { db: Database }
        ): Promise<ICommonMessageReturnType> => {
            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User dose not exits.");
            }


            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const {number: number1} = userResult.phones[index];
            await db.users.updateOne(
                {_id: new ObjectId(id), "phones.number": number1},
                {$set: {"phones.$.number": number}}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return {
                status: true,
                message: "Updated successfully."
            };
        },
        setPhoneNumberPrimary: async (
            _root: undefined,
            {id, index}: { id: string, index: number},
            {db}: { db: Database }
        ): Promise<ICommonMessageReturnType> => {
            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User dose not exits.");
            }

            const numbers = [];
            const userPhones = userResult.phones;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            for (let i = 0; i < userPhones.length; i++) {
                if (i == index) {
                    if (userPhones) {
                        numbers.push({
                            number: userPhones[i].number,
                            status: userPhones[i].status,
                            is_primary: true
                        });
                    }
                } else {
                    if (userPhones) {
                        numbers.push({
                            number: userPhones[i].number,
                            status: userPhones[i].status,
                            is_primary: false
                        });
                    }
                }
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {phones: numbers}}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return {
                status: true,
                message: "Set successfully."
            };
        },
        deletePhoneNumber: async (
            _root: undefined,
            {id, index}: { id: string, index: number},
            {db}: { db: Database }
        ): Promise<ICommonMessageReturnType> => {
            const userResult = await db.users.findOne({_id: new ObjectId(id)});
            if (!userResult) {
                throw new Error("User dose not exits.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.phones.length == 1) {
                throw new Error("You are not allowed to delete your number.");
            }

            const numbers = [];
            const userPhones = userResult.phones;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            for (let i = 0; i < userPhones.length; i++) {
                if (i != index) {
                    if (userPhones) {
                        numbers.push({
                            number: userPhones[i].number,
                            status: userPhones[i].status,
                            is_primary: true
                        });
                    }
                }
            }

            await db.users.updateOne(
                {_id: new ObjectId(id)},
                {$set: {phones: numbers}}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return {
                status: true,
                message: "Deleted successfully."
            };
        },
    },
    User: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (user: IUser): string => user._id.toString(),
    }
}