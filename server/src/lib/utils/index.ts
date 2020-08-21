import {Request} from "express";
import * as jwt from "jsonwebtoken";
import {Database, IUser} from "../../lib/types";


export const authorize = async (req: Request, db: Database): Promise<IUser | null> => {
    //Get the jwt token from the head
    const token = <string>req.headers["x-access-token"];

    if (!token) {
        throw new Error("Unauthorized!");
    }

    const secret = <string>process.env.JWT_SECRET;
    const {userId, exp} = <any>jwt.verify(token, secret);

    if (exp < Date.now().valueOf() / 1000) {
        throw new Error("Token has expired, please login to obtain a new one")
    }

    return await db.users.findOne({_id: userId});
};