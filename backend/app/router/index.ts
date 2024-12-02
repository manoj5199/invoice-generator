import { Router } from "express";
import { createInvoice, getInvoice } from "../controllers";

const invoiceRouter = Router();
// Create
invoiceRouter.post("/", createInvoice);
// Get all invoices
invoiceRouter.get("/", getInvoice);
// get a invoice
invoiceRouter.get("/:invoiceId");
// update a invoice
invoiceRouter.put("/:invoiceId");
// delete a invoice
invoiceRouter.delete("/:invoiceId");

export { invoiceRouter };
