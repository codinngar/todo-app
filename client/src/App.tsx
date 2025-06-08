import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./types/Task";

const App = () => {
    const [newTask, setNewTask] = useState<Task | undefined>(undefined);

    const handleTaskCreated = (task: Task) => {
        setNewTask(task);
    };

    return (
        <div className="p-8">
            <h1 className="mb-12 text-3xl font-bold text-center">My Tasks</h1>
            <TaskForm onTaskCreated={handleTaskCreated} />
            <TaskList newTask={newTask} />
        </div>
    );
};
export default App;
