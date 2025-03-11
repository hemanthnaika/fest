import React from "react";
import { Navbar } from "./layout/navbar";
import HeroSection from "./components/hero";
import AboutUs from "./components/about";
import Events from "./components/event";
import ContactUs from "./components/contact";
import Footer from "./layout/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Events />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
