import express from "express";
import {
  createComment,
  getComments,
  getSingleComment,
  updateComment,
  deleteComment,
} from "../controllers/commentController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createComment);

router.get("/", verifyToken,getComments);

router.get("/:id",verifyToken, getSingleComment);

router.put("/:id", verifyToken, updateComment);

router.delete("/:id", verifyToken, deleteComment);

export default router;
