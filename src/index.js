import express from "express";
import cors from "cors";
import "./db/db.js";
import { userRoutes } from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import { uploadRoutes } from "./routes/upload.routes.js";
import { recipeRoutes } from "./routes/recipe.routes.js";
import { profileRoutes } from "./routes/profile.routes.js";
import { searchRoutes } from "./routes/search.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
app.use(cookieParser());
app.options("*", cors());

app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/images", uploadRoutes);
app.use("/api/v1/recipe", recipeRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/search", searchRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + process.env.PORT || 3000);
});
