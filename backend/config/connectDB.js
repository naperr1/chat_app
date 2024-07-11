import mongoose from "mongoose";

async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGOOSE_URL);

    console.log(`Mongoose Connect ${connection.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}

export default connectDB;
