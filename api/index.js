import mongoose from "mongoose";

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "AestheticHaven" });
    isConnected = true;
    console.log("MongoDB connected (Vercel)");
  } catch (err) {
    console.error("MongoDB connection error (Vercel):", err);
  }
}

export default async function handler(req, res) {
  await connectDB();
  res.status(200).json({
    status: "ok",
    message: "Vercel serverless function alive",
    envPresent: !!process.env.MONGO_URI
  });
}
