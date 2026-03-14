import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

// POST method
router.post("/", userControllers.createUser);

// GET method
router.get("/", userControllers.getAllUsers);

router.get("/:id", userControllers.getUserById);

export const userRouter = router;
