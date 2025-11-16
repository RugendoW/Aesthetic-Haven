import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import NewInStore from "../components/NewInStore";
import AimSection from "../components/AimSection";
import AllProducts from "../components/AllProducts";
import Testimonials from "../components/Testimonials";
import AuthForm from "../components/AuthForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Stats />
      <About />
      <NewInStore />
      <AimSection />
      <AllProducts />
      <Testimonials />
      <AuthForm />
      <Footer />
    </>
  );
}

export default Home;
