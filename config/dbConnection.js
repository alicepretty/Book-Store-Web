import mongoose from "mongoose";

const connectedDb = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URL, {
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export { connectedDb };
