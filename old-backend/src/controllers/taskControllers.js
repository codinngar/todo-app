import pkg from "@prisma/client/extension";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await prisma.task.findMany();
        res.status(200).send(tasks);
    } catch (error) {
        console.error("Error in getAllTasks controller:", error);
        res.status(500).send({ message: "Internal server error" });
    }
};

// export const getTaskById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const tasks = await db.query("SELECT * FROM tasks WHERE id = ?", [id]);

//         if (tasks.length === 0)
//             return res.status(404).send({ message: "Task not found!" });

//         res.status(200).send(tasks[0]);
//     } catch (error) {
//         console.error("Error in getTaskById controller:", error);
//         res.status(500).send({ message: "Internal server error" });
//     }
// };

export const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const now = new Date();

        const task = await prisma.task.create({
            data: {
                title: title,
                createdAt: now,
                updatedAt: now,
            },
        });

        res.status(200).send(task);
    } catch (error) {
        console.error("Error in createTask controller:", error);
        res.status(500).send({ message: "Internal server error" });
    }
};
