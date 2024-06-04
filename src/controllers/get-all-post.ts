import {Request, Response} from "express";

import Post from "../models/post";

export const getAllPost = async (req: Request, res: Response) => {

  const posts = await Post.find({});

  res.send(posts)

};