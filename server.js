import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv"
import User from "./models/User.js"


dotenv.config();

const app = express();
app.use(express.json());

// Allow your frontend (adjust port if your Vite/React port differs)
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
  })
);
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const SECRET_KEY = process.env.SECRET_KEY;

// --- Safety checks ---
if (!MONGO_URL || !SECRET_KEY) {
  console.error(" Missing MONGO_URL or SECRET_KEY in .env file");
  process.exit(1);
}

// MongoDB Connection
mongoose
  .connect(MONGO_URL)
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.log(" MongoDB Connection Error:", err));

// Register / Create Account
app.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Create JWT token
    const token = jwt.sign({ id: newUser._id }, SECRET_KEY, { expiresIn: "1200" });

    res.status(201).json({ message: "User created successfully", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // Create JWT token
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1200" });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(5000, () => console.log(" Server running on http://localhost:5000"));