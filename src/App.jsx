import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Sustainability from "./components/Sustainability";
import Materials from "./components/Materials";
import Economics from "./components/Economics";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Sustainability />
      <Materials />
      <Economics />
      <Vision />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
