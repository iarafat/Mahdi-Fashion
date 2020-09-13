import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {Database, IOrder, IOrderTracker} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {IOrderInputArgs} from "./types";


const oderTracker: Array<IOrderTracker> = [
    {
        status: "Pending",
        ordering: 1,
        is_current: true
    },
    {
        status: "Received",
        ordering: 2,
        is_current: false
    },
    {
        status: "Processing",
        ordering: 3,
        is_current: false
    },
    {
        status: "In Transit",
        ordering: 4,
        is_current: false
    },
    {
        status: "Delivered",
        ordering: 5,
        is_current: false
    },
    {
        status: "Cancel",
        ordering: 6,
        is_current: false
    },
    {
        status: "Failed",
        ordering: 7,
        is_current: false
    }
];

const makeObjectIds =  (ids: [string]) =>  {
    let objIds: Array<ObjectId> = [];

    ids.forEach(item => {
       objIds.push(new ObjectId(item))
    });

    return objIds;
}

export const ordersResolvers: IResolvers = {
    Query: {
        orders: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<IOrder[]> => {
            await authorize(req, db);
            return await db.orders.find({}).toArray();
        }
    },

    Mutation: {
        createOrder: async (
            _root: undefined,
            {input}: IOrderInputArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<IOrder> => {
            await authorize(req, db);

            const paymentOption = await db.payment_options.findOne({_id: new ObjectId(input.payment_option_id)});
            const products = await db.products.find({ _id: {$in: makeObjectIds(input.product_ids)}})

            // @ts-ignore
            const {type: paymentType} = paymentOption;
            let paymentStatus;
            if (paymentType.toLowerCase() == 'cod' || paymentType.toLowerCase() == 'cash on delivery') {
                paymentStatus = "Unpaid";
            } else {
                paymentStatus = "Paid";
            }

            // @ts-ignore
            const insertData: IOrder = {
                _id: new ObjectId(),
                customer_id: input.customer_id,
                contact_number: input.contact_number,
                payment_option_id: input.payment_option_id,
                datetime: new Date().toUTCString(),
                delivery_address: input.delivery_address,
                amount: input.amount,
                payment_id: input.payment_id,
                payment_method: paymentType,
                payment_status: paymentStatus,
                status: "Pending",
                order_tracking: oderTracker,
                order_products: [OrderProducts];
                created_at: new Date().toUTCString(),
            };

            const insertResult = await db.orders.insertOne(insertData);
            return insertResult.ops[0];
        },

        updatePaymentOption: async (
            _root: undefined,
            {id, name, type, image, details}: { id: string, name: string, type: string, image: string, details: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<IOrder> => {
            await authorize(req, db);

            const existsData = await db.payment_options.findOne({_id: new ObjectId(id)});
            if (!existsData) {
                throw new Error("Resource not found.");
            }

            const updateData: IOrder = {
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
    },

    PaymentOption: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (type: IPaymentOption): string => type._id.toString(),
    }
}