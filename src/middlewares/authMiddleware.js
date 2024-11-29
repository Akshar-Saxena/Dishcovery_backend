import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel } from "../models/user.model.js";
dotenv.config();

async function authMiddleware(req, res, next) {
    try {
        const access_token = req.cookies.access_token;
        const decoded = jwt.verify(access_token, process.env.SECRET_KEY);
        const user = await userModel.findOne({ _id: decoded._id });
        req.body = { ...req.body, _id: decoded._id, author: user.username };
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized" });
    }
}

export { authMiddleware };
