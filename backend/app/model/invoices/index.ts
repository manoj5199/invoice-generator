import { invoiceCollection } from "../../database";
import { InvoiceData } from "./index.types";

export class Invoices {
  constructor() {}
  static create = async (data: InvoiceData): Promise<InvoiceData | null> => {
    const result = await invoiceCollection.insertOne(data);
    if (!result.insertedId) {
      return null;
    }
    console.log(result);
    return data;
  };
  static findAll = async (page: number, limit: number): Promise<any | null> => {
    const result = await invoiceCollection
      .find({})
      .skip(limit * (page - 1))
      .limit(limit)
      .toArray();
    return result;
  };
  static find = (invoiceId: string): InvoiceData | null => {
    return null;
  };
  static update = (invoiceId: string): InvoiceData | null => {
    return null;
  };
  static delete = (invoiceId: string): InvoiceData | null => {
    return null;
  };
}
