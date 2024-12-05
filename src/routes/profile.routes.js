import express, { Router } from "express";
import {
    changeAvatarController,
    getInfoController,
} from "../controllers/profile.avatar.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const profileRoutes = Router();

profileRoutes.post("/change-avatar", authMiddleware, changeAvatarController);
profileRoutes.get("/info", authMiddleware, getInfoController);
profileRoutes.post("/follow", authMiddleware, followUserController);

export { profileRoutes };
