import { useState } from "react";
import HomePage from "@/pages/home/HomePage";
import Navbar from "@/components/layout/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
