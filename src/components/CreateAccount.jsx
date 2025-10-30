// components/CreateAccount.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Here you’d normally save user info or call your backend
    navigate("/login"); // move to login page next
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 py-16 px-4">
      <form
        onSubmit={handleCreateAccount}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
          Create Your Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
        >
          Create Account
        </button>

        <button 
          type="button"
          onClick={() => navigate('/')}
          className="w-full mt-4 bg-pink-300 hover:bg-pink-400 text-pink-800 py-2 rounded-lg"
          >
            Back to Home
          </button>
      </form>
    </div>
  );
};

export default CreateAccount;
