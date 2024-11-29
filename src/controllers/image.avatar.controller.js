import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadAvatarController(req, res) {
    console.log(req.body);
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const result = await cloudinary.uploader.upload(dataURI);
        res.json({ imageUrl: result.secure_url });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error uploading image to Cloudinary" });
    }
}

export { uploadAvatarController };
