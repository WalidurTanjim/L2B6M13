import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

// POST method
router.post("/", userControllers.createUser);

export const userRouter = router;
