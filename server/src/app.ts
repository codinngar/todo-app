import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import tasksRoutes from "./routes/tasksRoutes";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasksRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
