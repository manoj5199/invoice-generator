import { Request, Response } from "express";
import { Invoices } from "../model/invoices";
import { Invoice, InvoiceData } from "../model/invoices/index.types";
// import { InvoiceData } from "../model/invoices/index.types";

const createInvoice = async (req: Request, res: Response) => {
  const requestBody: InvoiceData = req.body;

  if (Object.keys(requestBody).length === 0) {
    res.status(400).json({ message: "Invalid request body." });
    return;
  }

  if (!(typeof requestBody.items === "object")) {
    res.status(400).json({ message: "Invalid request body." });
    return;
  }

  console.log(requestBody);
  // requestBody.items.forEach((d) => {
  // });

  const data = new Invoice(
    requestBody.invoiceNumber,
    requestBody.invoiceDate,
    requestBody.dueDate,
    requestBody.customer,
    requestBody.items,
    requestBody.taxes,
    requestBody.status,
    requestBody.totalAmount
  );
  // totalAmount: requestBody.totalAmount,
  // customer: requestBody.customer,
  // dueDate: requestBody.dueDate,
  // invoiceDate: requestBody.invoiceDate,
  // invoiceNumber: requestBody.invoiceNumber,
  // items: requestBody.items,
  // status: requestBody.status,
  // taxes: requestBody.taxes,
  // )
  const result = await Invoices.create(data);

  console.log("skdvciwhkvchsvc::::", requestBody);

  if (!result) {
    res.status(500).json({ message: "Internal server error." });
    return;
  }
  // console.log(result)
  res.json(result);
};

const getInvoice = async (req: Request, res: Response) => {
  console.log(req.params);

  const limit = req.query.limit || 10;
  const page = req.query.page || 1;

  console.log(limit, page, req.query, req.body);
  const result = await Invoices.findAll(+page, +limit);
  res.json(result);
};

export { createInvoice, getInvoice };
