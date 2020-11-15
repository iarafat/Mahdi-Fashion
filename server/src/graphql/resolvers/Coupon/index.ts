import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {
    Database,
    ICoupon,
    ICommonMessageReturnType,
    ICommonPaginationArgs,
    ICommonPaginationReturnType, IProduct
} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {ICouponInputArgs} from "./types";
import {slugify} from "../../../lib/utils/slugify";
import {search} from "../../../lib/utils/search";
import {RUNNING} from "../../../lib/utils/constant";

export const couponsResolvers: IResolvers = {
    Query: {
        coupons: async (
            _root: undefined,
            {limit, offset, searchText}: {
                limit: ICommonPaginationArgs["limit"],
                offset: ICommonPaginationArgs["offset"],
                searchText: ICommonPaginationArgs["searchText"]
            },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonPaginationReturnType> => {
            let coupons = await db.coupons.find({}).sort({_id: -1}).toArray();
            coupons = search(coupons, ['title', 'code'], searchText);
            const hasMore = coupons.length > offset + limit;
            return {
                items: limit == 0 ? coupons : coupons.slice(offset, offset + limit),
                totalCount: coupons.length,
                hasMore,
            }
        },

        getCoupon: async (
            _root: undefined,
            {code}: { code: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICoupon> => {
            const coupons = await db.coupons.findOne({code: code});

            if (!coupons) {
                throw new Error("Resource not found.");
            }

            return coupons;
        }
    },

    Mutation: {
        createCoupon: async (
            _root: undefined,
            {input}: ICouponInputArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<ICoupon> => {

            await authorize(req, db);

            const existsData = await db.coupons.findOne({code: input.code});
            if (existsData) {
                throw new Error("This Code already exits.");
            }

            const insertData: ICoupon = {
                _id: new ObjectId(),
                title: input.title,
                code: input.code,
                maximum_discount_amount: input.maximum_discount_amount,
                expiration_date: input.expiration_date,
                status: input.status ? input.status : RUNNING,
                created_at: new Date().toUTCString(),
                updated_at: '',
            };

            const insertResult = await db.coupons.insertOne(insertData);
            return insertResult.ops[0];
        },

        updateCoupon: async (
            _root: undefined,
            {id, input}: ICouponInputArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<ICoupon> => {
            await authorize(req, db);
            const couponExists = await db.coupons.findOne({_id: new ObjectId(id)});
            if (!couponExists) {
                throw new Error("Resource not found.");
            }

            const updateData: ICoupon = {

                _id: new ObjectId(),
                title: input.title,
                code: input.code,
                maximum_discount_amount: input.maximum_discount_amount,
                expiration_date: input.expiration_date,
                status: input.status,
                updated_at: new Date().toUTCString(),
            };

            await db.coupons.updateOne(
                {_id: new ObjectId(id)},
                {$set: updateData}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return await db.coupons.findOne({_id: new ObjectId(id)});
        },

        deleteCoupon: async (
            __root: undefined,
            {id}: { id: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const deleteResult = await db.coupons.findOneAndDelete({
                _id: new ObjectId(id)
            });

            if (!deleteResult.value) {
                throw new Error("Failed to delete resource.")
            }

            return {
                message: 'Resource successfully deleted.',
                status: true
            };
        },
    },

    Coupon: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (coupon: ICoupon): string => coupon._id.toString(),

    }
}