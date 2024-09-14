import express from "express";
import {
  createPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createPost);

router.get("/", verifyToken,getPosts);

router.get("/:id",verifyToken, getSinglePost);

router.put("/:id", verifyToken, updatePost);

router.delete("/:id", verifyToken, deletePost);

export default router;
