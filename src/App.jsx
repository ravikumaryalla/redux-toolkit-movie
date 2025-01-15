import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { Trending } from "./pages/trending/Trending";
import { Popular } from "./pages/popular/Popular";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
