import express from "express";
import connectDB from "./db/connectDB.js";
import taskRoutes from "./routes/task.route.js";
import authRoutes from "./routes/auth.route.js";

// Generate JWT secret
// import crypto from "node:crypto";
// console.log(crypto.randomBytes(32).toString("hex"));

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running");
  });
});
