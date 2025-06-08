import express from "express";
import {
    createTask,
    getAllTasks,
    // getTaskById,
} from "../controllers/taskControllers.js";

const router = express.Router();

router.get("/", getAllTasks);
// router.get("/:id", getTaskById);
router.post("/", createTask);

export default router;
