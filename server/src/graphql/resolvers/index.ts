import merge from "lodash.merge";
import {usersResolvers} from "./User";
import {typesResolvers} from "./Type";
import {categoriesResolvers} from "./Category";
import {productsResolvers} from "./Product";

export const resolvers = merge(
    usersResolvers,
    typesResolvers,
    categoriesResolvers,
    productsResolvers
);