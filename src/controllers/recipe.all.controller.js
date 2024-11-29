import { recipeModel } from "../models/recipe.model.js";

async function getAllRecipeController(req, res) {
    const allRecipes = await recipeModel.find({});
    res.status(200).json({ message: "All recipes found", recipes: allRecipes });
}

export { getAllRecipeController };
