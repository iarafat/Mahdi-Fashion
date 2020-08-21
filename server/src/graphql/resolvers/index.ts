import merge from "lodash.merge";
import {usersResolvers} from "./User";
import {typesResolvers} from "./Type";

export const resolvers = merge(usersResolvers, typesResolvers);