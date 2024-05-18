import React from "react";
import Navbar from "../landingpage/Navbar";
import Herosection from "./Herosection ";
import Features from "./Features";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
