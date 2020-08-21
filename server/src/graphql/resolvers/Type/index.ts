import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {Database, IType} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {ITypeInputArgs} from "./types";
import {slugify} from "../../../lib/utils/slugify";

export const typesResolvers: IResolvers = {
    Query: {
        types: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<IType[]> => {
            await authorize(req, db);
            return await db.types.find({}).toArray();
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
            };

            await db.types.updateOne(
                {_id: new ObjectId(id)},
                {$set: typeData}
            );
            const typeUpdateResult = await db.types.findOne({_id: new ObjectId(id)});

            // @ts-ignore
            return typeUpdateResult;
        },
    },

    MainType: {
        // @ts-ignore
        id: (type: IType): string =>  type._id.toString(),
    }
}