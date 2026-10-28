import { useState } from "react";
import HomePage from "@/pages/home/HomePage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutUsPage from "@/pages/aboutus/AboutUsPage";
import ClassListPage from "@/pages/classList/ClassListPage";
import NewsPage from "@/pages/news/NewsPage";
import NewsDetailPages from "@/pages/newsdetail/NewsDetailPages";
import ContactPages from "@/pages/contact/ContactPages";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes className="mt-12 pt-12">
        <Route path="/" element={<HomePage />} />

        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/class-list" element={<ClassListPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetailPages />} />
        <Route path="/contact" element={<ContactPages />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
