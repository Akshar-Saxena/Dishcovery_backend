import { userModel } from "../models/user.model.js";

async function changeAvatarController(req, res) {
    try {
        const { link, _id, author } = req.body;
        await userModel.findOneAndUpdate({ _id }, { avatarLink: link });
        res.status(200).json({ message: "Avatar updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

async function getInfoController(req, res) {
    try {
        const { _id, author } = req.body;
        const user = await userModel.find({ _id });
        if (user.length > 0) {
            const userInfo = Object.entries(user[0]._doc).filter(
                (attribute) => attribute[0] != "password"
            );
            res.status(200).json({
                message: "Profile found",
                info: Object.fromEntries(userInfo),
            });
        } else {
            res.status(404).json({ message: "No such user" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { changeAvatarController, getInfoController };
