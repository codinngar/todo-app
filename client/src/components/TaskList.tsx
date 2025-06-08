import { useEffect, useState } from "react";
import type { Task } from "../types/Task";
import { deleteTask, getAllTasks, toggleTask } from "../api/tasks";
import TaskItem from "./TaskItem";

interface Props {
    newTask?: Task;
}

const TaskList: React.FC<Props> = ({ newTask }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        getAllTasks().then(setTasks);
    }, []);

    useEffect(() => {
        if (newTask) {
            setTasks((prev) => [newTask, ...prev]);
        }
    }, [newTask]);

    const handleToggle = async (id: number, completed: boolean) => {
        const updated = await toggleTask(id, completed);
        setTasks((prev) =>
            prev.map((task) => (task._id === id ? updated : task))
        );
    };

    const handleEdit = (updated: Task) => {
        setTasks((prev) =>
            prev.map((task) => (task._id === updated._id ? updated : task))
        );
    };

    const handleDelete = async (id: number) => {
        await deleteTask(id);
        setTasks((prev) => prev.filter((task) => task._id !== id));
    };

    return (
        <div className="flex flex-col gap-4">
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
};
export default TaskList;
