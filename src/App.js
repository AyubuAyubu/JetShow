import React from "react";
import Header from "./components/Header";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddJet from "./pages/AddJet";
import About from "./pages/About";
import OurJet from "./components/OurJet"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addjet" element={<AddJet />} />
        <Route path="/ourjet" element={<OurJet />} />
      </Routes>
    </>
  );
}

export default App;
