import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://saijucodes:733953@cluster0.nlvfpyp.mongodb.net/food-web"
    )
    .then(() => console.log("DB Connected"));
};
