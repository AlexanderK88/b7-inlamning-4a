import mongoose from "mongoose";

const connectToDb = async () => {
  const url = process.env.MONGO_URI;

  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(url).then(() => console.log("MongoDB connected..."));
  } catch (err) {
    console.error(err);
  }
};

export default connectToDb;
