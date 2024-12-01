import { Router } from "express";
import { searchController } from "../controllers/search.controller.js";

const searchRoutes = Router();

searchRoutes.get("/", searchController);

export { searchRoutes };
