import React from "react";
import Header from "./components/Header";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddJet from "./pages/AddJet";
import OurJet from "./pages/OurJet"
import NotFound from "./components/NotFound";

//Using Routes and Route for navigation 
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/addjet" element={<AddJet />} />
        <Route path="/ourjet" element={<OurJet />} />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </>
  );
}

export default App;
