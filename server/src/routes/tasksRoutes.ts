import {
    createTask,
    deleteAllTasks,
    deleteTask,
    getAllTasks,
    getTaskById,
    updateTask,
} from "../controllers/tasksControllers";
import express from "express";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/", deleteAllTasks);
router.delete("/:id", deleteTask);

export default router;
