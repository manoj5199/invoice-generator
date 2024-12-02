import { ObjectId } from "mongodb";

export type Status = "pending" | "paid" | "canceled";

export interface Item {}
export interface Tax {}

export interface InvoiceData {
  _id?: ObjectId;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  customer: string;
  items: Item[];
  taxes: Tax[];
  status: Status;
  totalAmount: number;
}

export class Invoice implements InvoiceData {
  constructor(
    public invoiceNumber: string,
    public invoiceDate: string,
    public dueDate: string,
    public customer: string,
    public items: Item[],
    public taxes: Tax[],
    public status: Status,
    public totalAmount: number,
    public _id?: ObjectId
  ) {}
}
