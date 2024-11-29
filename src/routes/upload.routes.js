import express from "express";
import dotenv from "dotenv";
import { upload } from "../constants/multer.js";
import { uploadAvatarController } from "../controllers/image.avatar.controller.js";
import cloudinary from "cloudinary";
dotenv.config();

const uploadRoutes = express.Router();

uploadRoutes.post("/avatar", upload.single("image"), uploadAvatarController);

export { uploadRoutes };
