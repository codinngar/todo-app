import { useEffect, useState } from "react";
import type { Task } from "../types/Task";
import { getAllTasks, toggleTask } from "../api/tasks";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getAllTasks().then(setTasks);
    }, []);

    const handleToggle = async (id: number, completed: boolean) => {
        const updated = await toggleTask(id, completed);
        setTasks((prev) =>
            prev.map((task) => (task._id === id ? updated : task))
        );
    };

    return (
        <div className="flex flex-col gap-4">
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} onToggle={handleToggle} />
            ))}
        </div>
    );
};
export default TaskList;
