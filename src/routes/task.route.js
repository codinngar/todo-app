import express from "express";
import {
  createTask,
  deleteAllTasks,
  deleteTask,
  getAllTasks,
  getTaskById,
  toggleTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.patch("/:id/toggle", toggleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.delete("/", deleteAllTasks);

export default router;
