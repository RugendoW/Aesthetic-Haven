import React,{useState,useEffect} from "react";
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
// import Nav from "./components/Navbar";
import Header from "./components/Header";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import About from "./components/About";
import NewInStore from "./components/NewInStore";
import AimSection from "./components/AimSection";
import AllProducts from "./components/AllProducts";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const token =localStorage.getItem("token");

  const handleLogout = () => {
    localstorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter >
    <Navbar /> 
      <Routes>
        {/* If not logged in, always show CreateAccount first */}
        {!token ? (
          <>
            <Route path="/" element={<CreateAccount />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/create-account" />} />
          </>
        ) : (
          <>


   
        {/* Home page with header + hero */}
        <Route path="/" element={<Header />} />
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
        
        {/*footer page*/}
        <Route path="/" element={<Footer />} />
       
        {/*dashboard page*/}

        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/" element={<Header onLogout={handleLogout} />} />

     </>
        )}
     </Routes>

    </BrowserRouter>
  );
}

export default App;
