import { MongoClient } from "mongodb";
import { InvoiceData } from "../model/invoices/index.types";

const databaseName = process.env.DB_NAME || "invoice-generator";

const client = new MongoClient("mongodb://localhost:27017");

const db = client.db(databaseName);

console.log("Connected to database");

export const invoiceCollection = db.collection<InvoiceData>("invoices");
