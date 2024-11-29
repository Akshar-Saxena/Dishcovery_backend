import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { recipeCreateController } from "../controllers/recipe.create.controller.js";
import { getAllRecipeController } from "../controllers/recipe.all.controller.js";

const recipeRoutes = express.Router();

recipeRoutes.post("/create", authMiddleware, recipeCreateController);
recipeRoutes.get("/all", authMiddleware, getAllRecipeController);

export { recipeRoutes };
