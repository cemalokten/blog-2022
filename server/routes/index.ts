import { Router } from "express";
import { getPostController } from "../controllers/";
const router = Router();

router.get("/post/:title", getPostController);
// router.get("/posts", getBugByIdController);
