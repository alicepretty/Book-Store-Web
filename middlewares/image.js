import uploader from "../config/cloudinary.js";

const uploadImage = async (req) => {
  if (!req.files || !req.files.image) {
    throw new Error("No file was uploaded or the photo field is missing.");
  }

  const tmp = req.files.image.tempFilePath;
  const result = await uploader.upload(
    tmp,
    { folder: "BookImage" },
    (_, results) => results
  );

  return result;
};

export default uploadImage;