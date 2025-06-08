import {
    Button,
    Card,
    CardBody,
    Checkbox,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Form,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@heroui/react";
import type { Task } from "../types/Task";
import { EllipsisVertical } from "lucide-react";
import { updateTask } from "../api/tasks";
import { useState } from "react";

interface Props {
    task: Task;
    onToggle: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
    onEdit: (updated: Task) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete, onEdit }) => {
    const [editedTitle, setEditedTitle] = useState(task.title);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const {
        isOpen: isEditOpen,
        onOpen: openEdit,
        onOpenChange: onEditOpenChange,
    } = useDisclosure();

    const handleSave = async () => {
        const updated = await updateTask(task._id, editedTitle);
        onEdit(updated);
    };

    return (
        <>
            <Card
                shadow="sm"
                isPressable
                isDisabled={task.completed}
                onClick={() => onToggle(task._id, !task.completed)}
                className="cursor-pointer"
            >
                <CardBody className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            isSelected={task.completed}
                            onChange={() => onToggle(task._id, !task.completed)}
                        />
                        <p>{task.title}</p>
                    </div>

                    <Dropdown>
                        <DropdownTrigger>
                            <Button isIconOnly size="sm" variant="light">
                                <EllipsisVertical />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem
                                variant="flat"
                                key="edit"
                                onPress={openEdit}
                            >
                                Edit
                            </DropdownItem>
                            <DropdownItem
                                variant="flat"
                                key="delete"
                                className="text-danger"
                                color="danger"
                                onPress={onOpen}
                            >
                                Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </CardBody>
            </Card>

            {/* Delete Modal */}
            <Modal
                placement="center"
                className="m-4"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 mt-4 text-xl text-center">
                                Delete task?
                            </ModalHeader>
                            <ModalBody className="text-center">
                                <p>{task.title}</p>
                            </ModalBody>
                            <ModalFooter className="flex justify-between">
                                <Button
                                    className="font-bold"
                                    color="danger"
                                    variant="light"
                                    onPress={() => onDelete(task._id)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    className="font-bold"
                                    color="default"
                                    onPress={onClose}
                                >
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* Edit Modal */}
            <Modal
                placement="center"
                className="m-4"
                isOpen={isEditOpen}
                onOpenChange={onEditOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Edit Task</ModalHeader>
                            <Form
                                onSubmit={async (e) => {
                                    e.preventDefault();

                                    if (!editedTitle.trim()) {
                                        return;
                                    }

                                    await handleSave();
                                    onClose();
                                }}
                            >
                                <ModalBody className="w-full">
                                    <Input
                                        variant="bordered"
                                        size="lg"
                                        isRequired
                                        autoFocus
                                        value={editedTitle}
                                        onChange={(e) =>
                                            setEditedTitle(e.target.value)
                                        }
                                        placeholder="Edit task title"
                                        errorMessage={
                                            editedTitle.trim() === ""
                                                ? "Task title cannot be empty"
                                                : ""
                                        }
                                        isInvalid={editedTitle.trim() === ""}
                                    />
                                </ModalBody>
                                <ModalFooter className="flex justify-between w-full">
                                    <Button
                                        color="primary"
                                        type="submit"
                                        isDisabled={editedTitle.trim() === ""}
                                    >
                                        Save
                                    </Button>
                                    <Button color="default" onPress={onClose}>
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </Form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};
export default TaskItem;
