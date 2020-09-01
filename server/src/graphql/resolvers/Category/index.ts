import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {Database, ICategory} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {ICategoryInputArgs} from "./types";
import {slugify} from "../../../lib/utils/slugify";

export const categoriesResolvers: IResolvers = {
    Query: {
        categories: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<ICategory[]> => {
            return await db.categories.find({}).toArray();
        }
    },

    Mutation: {
        createCategory: async (
            _root: undefined,
            {input}: ICategoryInputArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<ICategory> => {
            await authorize(req, db);

            const existsData = await db.categories.findOne({slug: slugify(input.name)});

            if (existsData) {
                throw new Error("Resource already exits.");
            }

            const insertData: ICategory = {
                _id: new ObjectId(),
                parent_id: input.parent_id,
                name: input.name,
                slug: slugify(input.name),
                banner: input.banner,
                icon: input.icon,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                created_at: new Date().toUTCString(),
            };

            const insertResult = await db.categories.insertOne(insertData);
            return insertResult.ops[0];
        },

        updateCategory: async (
            _root: undefined,
            {id, input}: ICategoryInputArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<ICategory> => {
            await authorize(req, db);

            const existsData = await db.categories.findOne({_id: new ObjectId(id)});
            if (!existsData) {
                throw new Error("Resource not found.");
            }

            const sameData = await db.categories.findOne({name: input.name, slug: slugify(input.name)});
            if (sameData) {
                throw new Error("Try with new value...");
            }

            const updateData: ICategory = {
                parent_id: input.parent_id,
                name: input.name,
                slug: slugify(input.name),
                banner: input.banner,
                icon: input.icon,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
            };

            await db.categories.updateOne(
                {_id: new ObjectId(id)},
                {$set: updateData}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return await db.categories.findOne({_id: new ObjectId(id)});
        },

        deleteCategory: async (
            __root: undefined,
            {id}: { id: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICategory> => {
            await authorize(req, db);

            const deleteResult = await db.categories.findOneAndDelete({
                _id: new ObjectId(id)
            });

            if (!deleteResult.value) {
                throw new Error("Failed to delete resource.")
            }

            return deleteResult.value;
        },
    },

    Category: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (type: ICategory): string => type._id.toString(),
    }
}