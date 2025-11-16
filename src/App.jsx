import React,{useState,useEffect} from "react";
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Stats from "./components/Stats"
import About from "./components/About";
import NewInStore from "./components/NewInStore";
import AimSection from "./components/AimSection";
import AllProducts from "./components/AllProducts";
import Testimonials from "./components/Testimonials";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Header />
        <Dashboard />
        <Stats />
        <About />
        <NewInStore />
        <AimSection />
        <AllProducts />
        <Testimonials />
        <AuthForm/>
        <Footer />
     </Routes>
    </BrowserRouter>
  );
}
export default App;
