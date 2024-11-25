import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chefs from "./components/Chefs/index";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chefs" element={<Chefs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
