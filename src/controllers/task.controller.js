import Task from "../models/task.model.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    console.error("Error in getAllTasks controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (err) {
    console.error("Error in getTaskById controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createTask = async (req, res) => {
  const { title } = req.body;
  try {
    const task = new Task({ title });
    const createdTask = await task.save();

    res.status(201).send(createdTask);
  } catch (err) {
    console.error("Error in createTask controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const toggleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.completed = !task.completed;
    const toggledTask = await task.save();

    res.status(200).json(toggledTask);
  } catch (err) {
    console.error("Error in toggleTask controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );

    res.status(200).json(updatedTask);
  } catch (err) {
    console.error("Error in updateTask controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error("Error in deleteTask controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAllTasks = async (req, res) => {
  try {
    await Task.deleteMany();

    res.status(200).json({ message: "All Tasks deleted successfully" });
  } catch (err) {
    console.error("Error in deleteAllTasks controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
