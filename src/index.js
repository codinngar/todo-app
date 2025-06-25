import express from "express";
import connectDB from "./db/connectDB.js";
import taskRoutes from "./routes/task.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1/tasks", taskRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running");
  });
});
