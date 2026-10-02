import { useState } from "react";
import HomePage from "@/pages/home/HomePage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
