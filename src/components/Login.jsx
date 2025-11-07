import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({onLogin}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email: email.trim().toLowerCase(),
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("login successful!");
      setTimeout(() => navigate("/components/App.jsx"),1200);
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      const msg = err.response?.data?.message || "Login failed. Please try again.";
      setError(msg);
      alert(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
          Welcome Back
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
