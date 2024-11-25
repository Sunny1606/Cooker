import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chefs from "./components/Chefs/index";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/chefs" && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chefs" element={<Chefs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
