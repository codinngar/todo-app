import { Button, Card, CardBody, Checkbox } from "@heroui/react";
import type { Task } from "../types/Task";
import { EllipsisVertical } from "lucide-react";

interface Props {
    task: Task;
    onToggle: (id: number, completed: boolean) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle }) => {
    return (
        <Card
            shadow="sm"
            isPressable
            isDisabled={task.completed}
            onClick={() => onToggle(task._id, !task.completed)}
            className="cursor-pointer"
        >
            <CardBody className="flex flex-row items-center justify-between">
                <div className="flex items-center">
                    <Checkbox
                        isSelected={task.completed}
                        onChange={() => onToggle(task._id, !task.completed)}
                    />
                    <p>{task.title}</p>
                </div>
                <Button isIconOnly size="sm" variant="light">
                    <EllipsisVertical />
                </Button>
            </CardBody>
        </Card>
    );
};
export default TaskItem;
