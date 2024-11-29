import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        avatarLink: {
            type: String,
            default:
                "https://res.cloudinary.com/dz6b9s5jh/image/upload/v1732886072/j8vrtxfpgoe4qcfqfvye.jpg",
        },
        followers: {
            type: Array,
            default: [],
        },
        following: {
            type: Array,
            default: [],
        },
        lastlogged: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const userModel = mongoose.model("users", userSchema);
