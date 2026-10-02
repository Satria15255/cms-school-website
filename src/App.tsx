import { useState } from "react";
import HomePage from "@/pages/home/HomePage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutUsPage from "@/pages/aboutus/AboutUsPage";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/ " element={<HomePage />} />

        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
