import { recipeModel } from "../models/recipe.model.js";

async function recipeCreateController(req, res) {
    try {
        const {
            author,
            title,
            description,
            imgs,
            ingredients,
            steps,
            prepTime,
            cookTime,
            serving,
        } = req.body;
        const newRecipe = new recipeModel({
            author,
            title,
            description,
            imgs,
            ingredients,
            steps,
            prepTime,
            cookTime,
            serving,
        });
        newRecipe
            .save()
            .then((data) => {
                res.status(201).json({
                    message: "Recipe created successfully",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ message: "Invalid recipe details" });
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { recipeCreateController };
