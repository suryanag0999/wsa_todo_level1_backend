import express from "express";
import { newTask,getTasks,updateTask, deleteTask} from "../controller/task.controller.js";

const router = express.Router();

// Set up the POST route
router.post("/task", newTask);
router.get("/tasks", getTasks);
router.put("/task/:id", updateTask);  // Update 
router.delete("/task/:id", deleteTask); // Delete 

export default router; // Correct export statement