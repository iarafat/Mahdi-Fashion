import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {Database, IProduct} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {IProductInput, IUpdateProductInputArgs} from "./types";
import {slugify} from "../../../lib/utils/slugify";

export const productsResolvers: IResolvers = {
    Query: {
        products: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<IProduct[]> => {
            return await db.products.find({}).toArray();
        }
    },

    Mutation: {
        createProduct: async (
            _root: undefined,
            {input}: {input: IProductInput},
            {db, req}: { db: Database, req: Request }
        ): Promise<IProduct> => {
            await authorize(req, db);

            const existsData = await db.products.findOne({slug: slugify(input.name)});

            if (existsData) {
                throw new Error("Resource already exits with this name.");
            }

            const insertData: IProduct = {
                _id: new ObjectId(),
                type_id: input.type_id,
                category_id: input.category_id,
                name: input.name,
                slug: slugify(input.name),
                description: input.description,
                images: input.images,
                unit: input.unit,
                price: input.price,
                sale_price: input.sale_price,
                discount_in_percent: input.discount_in_percent,
                product_quantity: input.product_quantity,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                created_at: new Date().toUTCString(),
            };

            const insertResult = await db.products.insertOne(insertData);
            return insertResult.ops[0];
        },

        updateProduct: async (
            _root: undefined,
            {id, input}: IUpdateProductInputArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<IProduct> => {
            await authorize(req, db);

            const existsData = await db.products.findOne({_id: new ObjectId(id)});
            if (!existsData) {
                throw new Error("Resource not found.");
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const updateData: IProduct = {
                type_id: input.type_id ? input.type_id : existsData.type_id,
                category_id: input.category_id ? input.category_id : existsData.category_id,
                name: input.name ? input.name : existsData.name,
                slug: input.name ? slugify(input.name) : existsData.slug,
                description: input.description ? input.description : existsData.description,
                images: input.images ? input.images : existsData.images,
                unit: input.unit ? input.unit : existsData.unit,
                price: input.price ? input.price : existsData.price,
                sale_price: input.sale_price ? input.sale_price : existsData.sale_price,
                discount_in_percent: input.discount_in_percent ? input.discount_in_percent : existsData.discount_in_percent,
                product_quantity: input.product_quantity ? input.product_quantity : existsData.product_quantity,
                meta_title: input.meta_title ? input.meta_title : existsData.meta_title,
                meta_keyword: input.meta_keyword ? input.meta_keyword : existsData.meta_keyword,
                meta_description: input.meta_description ? input.meta_description : existsData.meta_description,
                updated_at: new Date().toUTCString(),
            };

            await db.products.updateOne(
                {_id: new ObjectId(id)},
                {$set: updateData}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return await db.products.findOne({_id: new ObjectId(id)});
        },

        deleteProduct: async (
            __root: undefined,
            {id}: { id: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<IProduct> => {
            await authorize(req, db);

            const deleteResult = await db.products.findOneAndDelete({
                _id: new ObjectId(id)
            });

            if (!deleteResult.value) {
                throw new Error("Failed to delete resource.")
            }

            return deleteResult.value;
        },
    },

    Product: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (product: IProduct): string => product._id.toString(),
    }
}