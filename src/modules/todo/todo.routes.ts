import express from "express";
import { todoControllers } from "./todo.controller";

const router = express.Router();

// POST method
router.post("/", todoControllers.createTodo);

// GET method
router.get("/", todoControllers.getAllTodos);

router.get("/:id", todoControllers.getTodoById);

// DELETE method
router.delete("/:id", todoControllers.deleteTodoById);

export const todoRouter = router;