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
       
        {/* Home page with header + hero */}
        <Route path="/" element={<Header />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path='/' element={<Stats />} />

        {/*About page*/}
        <Route path="/" element={<About />} />

        {/*Aim Section page*/}
        <Route path="/" element={<AimSection />} />

        {/*New In Store page*/}
        <Route path="/" element={<NewInStore />} />

        {/*All Products page*/}
        <Route path="/" element={<AllProducts />} />

        {/*Testimonials page*/}
        <Route path="/" element={<Testimonials />} />

        < Route path ="/" element={<AuthForm/>} />
        
        {/*footer page*/}
        <Route path="/" element={<Footer />} />
       

     </Routes>
    </BrowserRouter>
  );
}
export default App;
