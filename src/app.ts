import express from "express";
import cors from "cors";
import "express-async-errors";


import createAddressRouter from "./routers/create-address";
import { errorHandler } from "./helper-function/error-handler";

const app = express();

app.set('trust proxy', false);
app.use(cors())

app.use(createAddressRouter)
app.use(errorHandler)

export default app;
