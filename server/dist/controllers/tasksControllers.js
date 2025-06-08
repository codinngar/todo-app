"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.deleteAllTasks = exports.updateTask = exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task_1.default.find().sort({ createdAt: -1 });
        res.status(200).send(tasks);
    }
    catch (error) {
        console.error("Error in getAllTasks controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};
exports.getAllTasks = getAllTasks;
const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task_1.default.findById(id);
        if (!task)
            return res.status(404).send({ message: "Task not found!" });
        res.status(200).send(task);
    }
    catch (error) {
        console.error("Error in getTaskById controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};
exports.getTaskById = getTaskById;
const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const task = new Task_1.default({ title });
        const savedTask = await task.save();
        res.status(201).send(savedTask);
    }
    catch (error) {
        console.error("Error in createTask controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};
exports.createTask = createTask;
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const updatedTask = await Task_1.default.findByIdAndUpdate(id, { title, completed }, { new: true });
        if (!updatedTask)
            return res.status(404).send({ message: "Task not found!" });
        res.status(200).send(updatedTask);
    }
    catch (error) {
        console.error("Error in updateTask controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};
exports.updateTask = updateTask;
const deleteAllTasks = async (req, res) => {
    try {
        await Task_1.default.deleteMany();
        res.status(200).send({ message: "All tasks deleted successfully!" });
    }
    catch (error) {
        console.error("Error in deleteAllTasks controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};
exports.deleteAllTasks = deleteAllTasks;
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task_1.default.findByIdAndDelete(id);
        if (!deletedTask)
            return res.status(404).send({ message: "Task not found!" });
        res.status(200).send({ message: "Task deleted successfully!" });
    }
    catch (error) {
        console.error("Error in deleteTask controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=tasksControllers.js.map