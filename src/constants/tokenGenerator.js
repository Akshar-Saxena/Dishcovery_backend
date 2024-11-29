import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function generateToken(token) {
    const access_token = jwt.sign(token, process.env.SECRET_KEY, {
        expiresIn: "7d",
    });
    return access_token;
}

export { generateToken };
