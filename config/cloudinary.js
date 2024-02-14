import { config } from "dotenv";
import { v2 } from "cloudinary";

const cloudinary = v2;

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
export default cloudinary.uploader;
