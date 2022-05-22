import { Router } from "express";
import { getPostController, getPostsController } from "../controllers/";

const router = Router();

router.get("/post/:title", getPostController);
router.get("/posts", getPostsController);

export default router;
