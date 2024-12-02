import express, { json } from "express";
import { invoiceRouter } from "./router";

const app = express();
// Middleware
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

app.use(json());

app.use("/invoices", invoiceRouter);

export { app };
