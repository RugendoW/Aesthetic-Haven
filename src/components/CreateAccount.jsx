// components/CreateAccount.jsx
import { useState } from "react";
import axios from "axios";

function CreateAccount({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const endpoint = isRegister
        ? "http://localhost:5000/api/register"
        : "http://localhost:5000/api/login";

      const { data } = await axios.post(endpoint, {
        email: email.trim().toLowerCase(),
        password,
      });

      // If it's login and we get a token, log in
      if (data.token) {
        localStorage.setItem("token", data.token);
        onLogin?.(data.token);
      }

      setMessage(data.message || (isRegister ? "Account created!" : "Logged in!"));
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Aesthetic Haven</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg"
          required
          autoComplete={isRegister ? "new-password" : "current-password"}
          minLength={8}
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
        >
          {isRegister ? "Sign Up" : "Log In"}
        </button>

        <p
          className="text-sm text-center mt-3 cursor-pointer text-pink-600"
          onClick={() => {
            setIsRegister(!isRegister);
            setMessage("");
          }}
        >
          {isRegister
            ? "Already have an account? Log in"
            : "Don't have an account? Sign up"}
        </p>
        <p className="text-center text-red-500 mt-2">{message}</p>
      </form>
    </div>
  );
}

export default CreateAccount;
