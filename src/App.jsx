import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Faq from "./components/FAQ";
import "./App.css"; 

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   return <h1>Hello, AI-PAMSCO!</h1>;this is what I have  achieved so far
// }
// export default App;
