import express from "express";
import {json} from "body-parser";
import cors from "cors";
import "express-async-errors";


import createPostRouter from "./routers/create-post";
import getAllPostRouter from "./routers/get-all-post";

const app = express();

app.set('trust proxy', false);
app.use(json())
app.use(cors())

app.use(createPostRouter)
app.use(getAllPostRouter)

export default app;
