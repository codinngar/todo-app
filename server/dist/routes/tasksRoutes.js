"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tasksControllers_1 = require("../controllers/tasksControllers");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", tasksControllers_1.getAllTasks);
router.get("/:id", tasksControllers_1.getTaskById);
router.post("/", tasksControllers_1.createTask);
router.put("/:id", tasksControllers_1.updateTask);
router.delete("/", tasksControllers_1.deleteAllTasks);
router.delete("/:id", tasksControllers_1.deleteTask);
exports.default = router;
//# sourceMappingURL=tasksRoutes.js.map