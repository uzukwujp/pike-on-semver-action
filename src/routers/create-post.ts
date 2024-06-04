import {Router} from "express";
import {body} from "express-validator"

import { createPost } from "../controllers/create-post";

const createPostRouter = Router();

createPostRouter
.post('/posts',
 body('title').
 isString().
 withMessage("title must be a valid string"),
 body('body').
 isString().
 withMessage("body must be a valid string"),
 createPost
 )

export default createPostRouter;





