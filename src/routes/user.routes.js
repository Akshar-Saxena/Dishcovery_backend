import express from "express";
import { loginController } from "../controllers/user.login.controller.js";
import { signUpController } from "../controllers/user.signup.controller.js";

const userRoutes = express.Router();

userRoutes.post("/login", loginController);
userRoutes.post("/signup", signUpController);

userRoutes.get("/register", (req, res) => {
    res.json({ message: "Registering..." });
});

export { userRoutes };
