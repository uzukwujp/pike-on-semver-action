import {Request, Response} from "express";

import Post from "../models/post"

export const createPost = async (req: Request, res: Response) => {

  const {body, title} = req.body;

  const post = Post.build({
    body,
    title,
    comments: []
  })

  await post.save()

  res.status(201).send(post)

};
