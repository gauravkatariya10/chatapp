import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
