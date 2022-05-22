import { getPostUseCase, getPostsUseCase } from "../use-cases/postUseCases";
import { Request, Response } from "express";

const getPostController = async (req: Request, res: Response) => {
  try {
    const post = await getPostUseCase(req.params.title);
    res.send(post);
  } catch (error) {
    console.log(error);
  }
};

const getPostsController = async (req: Request, res: Response) => {
  try {
    const post = await getPostsUseCase();
    res.send(post);
  } catch (error) {
    console.log(error);
  }
};

export { getPostController, getPostsController };
