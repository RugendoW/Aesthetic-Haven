import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import About from "./components/About";
import AimSection from "./components/AimSection";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page with header + hero */}
        <Route path="/" element={<Header />} />

        {/* Signup page */}
        <Route path="/create-account" element={<CreateAccount />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/*About page*/}
        <Route path="/" element={<About />} />

        {/*Aim Section page*/}
        <Route path="/" element={<AimSection />} />

      </Routes>

    </Router>
  );
}

export default App;

