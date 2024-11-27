import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chefs from "./components/Argentina/index";
import Peru from "./components/Peru";
import Brasil from "./components/Brasil/index";
import { useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();

  return (
    <>
      {/* {location.pathname !== "/arg" && <Nav />} */}
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arg" element={<Chefs />} />
        <Route path="/peru" element={<Peru />} />
        <Route path="/brasil" element={<Brasil />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
