import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Solve from "./components/Solve";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/solve" element={<Solve />} />
      </Routes>
      <Footer />
    </Router>
  );
}
