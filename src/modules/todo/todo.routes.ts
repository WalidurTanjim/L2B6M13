import express from "express";
import { todoControllers } from "./todo.controller";

const router = express.Router();

// POST method
router.post("/", todoControllers.createTodo);

export const todoRouter = router;