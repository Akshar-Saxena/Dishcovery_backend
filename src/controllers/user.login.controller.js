import { generateToken } from "../constants/tokenGenerator.js";
import { userModel } from "../models/user.model.js";

async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        const users = await userModel.find({ email });
        if (users.length > 0) {
            if (users[0].password === password) {
                const access_token = generateToken({
                    _id: users[0]._id.toString(),
                });
                await userModel.findOneAndUpdate(
                    { email },
                    { lastLoggedIn: new Date() }
                );
                res.status(200)
                    .cookie("access_token", access_token, {
                        httpOnly: true,
                        sameSite: "none",
                        secure: true,
                        expires: new Date(Date.now() + 604800000),
                    })
                    .json({ message: "Login Success" });
            } else {
                res.status(400).json({ message: "Invalid Password" });
            }
        } else {
            res.status(404).json({ message: "No users found" });
        }
    } catch (err) {
        console.log(`Error at ${new Date()} : ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { loginController };
