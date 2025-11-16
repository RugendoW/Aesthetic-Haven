import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ message: "Login successful", email });
});

app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  res.json({ message: "Registeration successful", email });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
