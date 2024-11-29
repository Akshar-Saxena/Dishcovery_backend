import mongoose from "mongoose";

const comments = mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);
