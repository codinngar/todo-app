import api from "./index";
import type { Task } from "../types/Task";

export const getAllTasks = async (): Promise<Task[]> => {
    const response = await api.get("/tasks");
    return response.data;
};

export const createTask = async (task: Partial<Task>): Promise<Task> => {
    const response = await api.post("/tasks", task);
    return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
    await api.delete(`/tasks/${id}`);
};

export const toggleTask = async (
    id: number,
    completed: boolean
): Promise<Task> => {
    const response = await api.put(`/tasks/${id}`, { completed });
    return response.data;
};
