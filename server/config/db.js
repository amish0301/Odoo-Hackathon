import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    await mongoose
      .connect(uri)
      .then((res) => {
        console.log("DB connected", res.connection.host, res.connection.name);
      })
      .catch((err) => {
        console.log("DB connection failed:", err.message);
      });
  } catch (error) {
    console.log(error);
  }
};
