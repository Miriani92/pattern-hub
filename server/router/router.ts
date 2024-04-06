import express from "express";
import { handlePost, handleEdit } from "../controllers/controller";

const router = express.Router();

router.post("/", handlePost);
router.post("/:id", handleEdit);

export default router;
