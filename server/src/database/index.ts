import {MongoClient} from "mongodb";
import {Database} from "../lib/types";

const url = `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_USER_PASSWORD
}@${process.env.DB_CLUSTER}.mongodb.net`;
const dbName = process.env.DB_NAME;

export const connectDatabase = async (): Promise<Database> => {

    console.log("[mongodb]: Starting db init...")

    const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("[mongodb]: Connected successfully to database");

    const db = client.db(dbName);

    return {
        users: db.collection('users'),
        types: db.collection('types'),
    }
};