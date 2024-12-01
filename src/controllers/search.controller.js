import { recipeModel } from "../models/recipe.model.js";
import { userModel } from "../models/user.model.js";

async function searchController(req, res) {
    try {
        const { query, type } = req.query;
        if (query == "") {
            res.status(400).json({ message: "Do not send empty query" });
            return;
        }
        if (type == "account") {
            const user = await userModel.find({
                username: { $regex: new RegExp(`.*${query}.*`, "i") },
            });
            if (user.length > 5) {
                res.status(200).json({
                    message: "Search results",
                    users: user.slice(0, 5),
                });
                return;
            }
            res.status(200).json({ message: "Search results", users: user });
            return;
        } else if (type == "recipe") {
            const recipes = await recipeModel.find({
                description: { $regex: new RegExp(`.*${query}.*`, "i") },
            });
            if (recipes.length > 5) {
                res.status(200).json({
                    message: "Search results",
                    recipes: recipes.slice(0, 5),
                });
                return;
            }
            res.status(200).json({ message: "Search results", recipes });
            return;
        } else {
            null;
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { searchController };
