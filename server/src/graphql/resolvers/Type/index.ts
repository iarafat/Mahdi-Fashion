import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {Database, IType, ICommonPaginationArgs, ICommonPaginationReturnType} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {ITypeInputArgs} from "./types";
import {slugify} from "../../../lib/utils/slugify";
import {search} from "../../../lib/utils/search"

export const typesResolvers: IResolvers = {
    Query: {
        types: async (
            _root: undefined,
            { limit, offset, searchText }: ICommonPaginationArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonPaginationReturnType> => {
            let types =  await db.types.find({}).sort({created_at: 1}).toArray();
            types = search(types, ['name', 'slug'], searchText);
            const hasMore = types.length > offset + limit;

            return {
                items: types.slice(offset, offset + limit),
                totalCount: types.length,
                hasMore,
            }
        }
    },

    Mutation: {
        createType: async (
            _root: undefined,
            {input}: ITypeInputArgs,
            {db, req}: { db: Database, req: Request  }
        ): Promise<IType> => {
            await authorize(req, db);

            const typeResult = await db.types.findOne({slug: slugify(input.name)});

            if (typeResult) {
                throw new Error("Type already exits.");
            }

            const typeData: IType = {
                _id: new ObjectId(),
                name: input.name,
                slug: slugify(input.name),
                image: input.image,
                icon: input.icon,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                created_at: new Date().toUTCString(),
            };

            const insertResult = await db.types.insertOne(typeData);
            return insertResult.ops[0];
        },

        updateType: async (
            _root: undefined,
            {id, input}: ITypeInputArgs,
            {db, req}: { db: Database, req: Request  }
        ): Promise<IType> => {
            await authorize(req, db);

            const typeResult = await db.types.findOne({name: input.name, slug: slugify(input.name)});

            if (typeResult) {
                throw new Error("Try with new value...");
            }

            const typeData: IType = {
                name: input.name,
                slug: slugify(input.name),
                image: input.image,
                icon: input.icon,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                updated_at: new Date().toUTCString(),
            };

            await db.types.updateOne(
                {_id: new ObjectId(id)},
                {$set: typeData}
            );
            const typeUpdateResult = await db.types.findOne({_id: new ObjectId(id)});

            // @ts-ignore
            return typeUpdateResult;
        },

        deleteType: async (
            __root: undefined,
            {id}: {id: string},
            {db, req}: { db: Database, req: Request  }
        ): Promise<IType> => {
            await authorize(req, db);

            const deleteResult = await db.types.findOneAndDelete({
                _id: new ObjectId(id)
            });

            if (!deleteResult.value) {
                throw new Error("Failed to delete resource.")
            }

            return deleteResult.value;
        },
    },

    MainType: {
        // @ts-ignore
        id: (type: IType): string =>  type._id.toString(),
    }
}