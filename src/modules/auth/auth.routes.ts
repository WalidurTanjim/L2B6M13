import express from "express";
import { authControllers } from "./auth.controller";

const router = express.Router();

// POST method
router.post("/login", authControllers.loginUser);

export const authRoutes = router;