import {MongoClient} from "mongodb";
import {Database} from "../lib/types";
let url: string;

if (process.env.APP_ENV == 'production') {
    url = `mongodb+srv://${process.env.DB_USER}:${
        process.env.DB_USER_PASSWORD
    }@${process.env.DB_CLUSTER}.mongodb.net`;
} else if (process.env.APP_ENV == 'local') {
    url = <string>process.env.DB_URL;
}

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
        categories: db.collection('categories'),
        products: db.collection('products'),
        delivery_methods: db.collection('delivery_methods'),
        payment_options: db.collection('payment_options'),
    }
};