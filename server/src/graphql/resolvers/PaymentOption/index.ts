import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {Database, IPaymentOption} from "../../../lib/types";
import {authorize} from "../../../lib/utils";

export const paymentOptionsResolvers: IResolvers = {
    Query: {
        paymentOptions: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<IPaymentOption[]> => {
            return await db.payment_options.find({}).toArray();
        }
    },

    Mutation: {
        createPaymentOption: async (
            _root: undefined,
            {name, type, image, details}: { name: string, type: string, image: string, details: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<IPaymentOption> => {
            await authorize(req, db);

            const existsData = await db.payment_options.findOne({name: name});

            if (existsData) {
                throw new Error("Resource already exits.");
            }

            const insertData: IPaymentOption = {
                _id: new ObjectId(),
                name: name,
                type: type,
                image: image,
                details: details,
                created_at: new Date().toUTCString(),
            };

            const insertResult = await db.payment_options.insertOne(insertData);
            return insertResult.ops[0];
        },

        updatePaymentOption: async (
            _root: undefined,
            {id, name, type, image, details}: { id: string, name: string, type: string, image: string, details: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<IPaymentOption> => {
            await authorize(req, db);

            const existsData = await db.payment_options.findOne({_id: new ObjectId(id)});
            if (!existsData) {
                throw new Error("Resource not found.");
            }

            const updateData: IPaymentOption = {
                name: name,
                type: type,
                image: image,
                details: details ? details : existsData.details,
                updated_at: new Date().toUTCString(),
            };

            await db.payment_options.updateOne(
                {_id: new ObjectId(id)},
                {$set: updateData}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return await db.payment_options.findOne({_id: new ObjectId(id)});
        },

        deletePaymentOption: async (
            __root: undefined,
            {id}: { id: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<IPaymentOption> => {
            await authorize(req, db);

            const deleteResult = await db.payment_options.findOneAndDelete({
                _id: new ObjectId(id)
            });

            if (!deleteResult.value) {
                throw new Error("Failed to delete resource.")
            }

            return deleteResult.value;
        },
    },

    PaymentOption: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (type: IPaymentOption): string => type._id.toString(),
    }
}