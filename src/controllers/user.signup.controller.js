import { generateToken } from "../constants/tokenGenerator.js";
import { userModel } from "../models/user.model.js";

async function signUpController(req, res) {
    try {
        const { username, email, password } = req.body;
        const users_email = await userModel.find({ email });
        const users_username = await userModel.find({ username });
        if (users_email.length > 0) {
            res.status(400).json({
                message: "User with this email already exists",
            });
            return;
        }
        if (users_username.length > 0) {
            res.status(400).json({
                message: "User with this username already exists",
            });
            return;
        }

        const newUser = new userModel({
            username,
            email,
            password,
        });
        newUser
            .save()
            .then((data) => {
                const access_token = generateToken({
                    _id: data._id.toString(),
                });
                res.status(201)
                    .cookie("access_token", access_token, {
                        httpOnly: true,
                        sameSite: "none",
                        secure: true,
                        expires: new Date(Date.now() + 604800000),
                    })
                    .json({
                        message: "User registered successfully",
                    });
            })
            .catch((err) => {
                console.log("Erorr saving the user : ", err);
                res.status(400).json({ message: "Error creating user" });
            });
    } catch (error) {
        console.log(`Error at ${new Date()} : ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { signUpController };
