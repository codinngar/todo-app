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

router
  .get("/", getAllTasks)
  .get("/:id", getTaskById)
  .post("/", createTask)
  .patch("/:id/toggle", toggleTask)
  .patch("/:id", updateTask)
  .delete("/:id", deleteTask)
  .delete("/", deleteAllTasks);

export default router;
