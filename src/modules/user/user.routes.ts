import express from "express";
import { userControllers } from "./user.controller";
import auth from "../../middleware/auth";

const router = express.Router();

// POST method
router.post("/", userControllers.createUser);

// GET method
router.get("/", auth("admin"), userControllers.getAllUsers);

router.get("/:id", userControllers.getUserById);

// DELETE mehod
router.delete("/:id", userControllers.deleteUserById);

// PUT method
router.put("/:id", userControllers.updateUserById);

export const userRouter = router;
