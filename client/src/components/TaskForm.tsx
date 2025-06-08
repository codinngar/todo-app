import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/react";
import { useState } from "react";
import { createTask } from "../api/tasks";
import type { Task } from "../types/Task";

interface Props {
    onTaskCreated: (task: Task) => void;
}

const TaskForm: React.FC<Props> = ({ onTaskCreated }) => {
    const [newTitle, setNewTitle] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newTitle.trim()) return;

        const task = await createTask({ title: newTitle });
        onTaskCreated(task);
        setNewTitle("");
    };

    return (
        <Form onSubmit={onSubmit} className="flex flex-row gap-4 mb-8">
            <Input
                variant="bordered"
                size="lg"
                name="title"
                placeholder="Enter task"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <Button type="submit" size="lg" color="primary">
                Add
            </Button>
        </Form>
    );
};

export default TaskForm;
