import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imgs: {
            type: Array,
            default: [],
        },
        ingredients: {
            type: Array,
            required: true,
        },
        steps: {
            type: Object,
            required: true,
        },
        prepTime: {
            type: Number,
        },
        cookTime: {
            type: Number,
        },
        serving: {
            type: Number,
        },
        likes: {
            type: Number,
            default: 0,
        },
        dislikes: {
            type: Number,
            default: 0,
        },
        comments: {
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const recipeModel = mongoose.model("recipes", recipeSchema);
