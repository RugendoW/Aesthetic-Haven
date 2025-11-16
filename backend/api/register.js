export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    return res.status(200).json({
      message: "Register",
      email,
    });
  }

  res.status(405).json({ error: "Method not allowed" });
}
