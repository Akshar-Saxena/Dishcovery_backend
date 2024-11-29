import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then((connection) => {
        console.log("Connected to DB");
    })
    .catch((err) => console.log("Error connecting to DB"));
