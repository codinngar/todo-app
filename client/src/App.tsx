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
        <div className="p-8 md:p-20 max-w-[800px] mx-auto">
            <h1 className="mb-8 text-3xl font-bold text-center md:text-4xl md:mb-12">My Tasks</h1>
            <TaskForm onTaskCreated={handleTaskCreated} />
            <TaskList newTask={newTask} />
        </div>
    );
};
export default App;
