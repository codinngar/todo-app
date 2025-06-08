import { Request, Response } from "express";
import Task from "../models/Task";

export const getAllTasks = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const tasks = await Task.find();

        res.status(200).send(tasks);
    } catch (error) {
        console.error("Error in getAllTasks controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};

export const getTaskById = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);

        if (!task) return res.status(404).send({ message: "Task not found!" });
        res.status(200).send(task);
    } catch (error) {
        console.error("Error in getTaskById controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};

export const createTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const { title } = req.body;
        const task = new Task({ title });
        const savedTask = await task.save();

        res.status(201).send(savedTask);
    } catch (error) {
        console.error("Error in createTask controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};

export const updateTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, completed },
            { new: true }
        );

        if (!updatedTask)
            return res.status(404).send({ message: "Task not found!" });
        res.status(200).send(updatedTask);
    } catch (error) {
        console.error("Error in updateTask controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};

export const deleteAllTasks = async (req: Request, res: Response): Promise<any> => {
    try {
        await Task.deleteMany();

        res.status(200).send({ message: "All tasks deleted successfully!" });
    } catch (error) {
        console.error("Error in deleteAllTasks controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask)
            return res.status(404).send({ message: "Task not found!" });
        res.status(200).send({ message: "Task deleted successfully!" });
    } catch (error) {
        console.error("Error in deleteTask controller:", error);
        res.status(500).send({ message: "Internal server error!" });
    }
};
