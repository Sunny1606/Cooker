import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chefs from "./components/Argentina/index";
import Peru from "./components/Peru";
import Brasil from "./components/Brasil/index";

import { useLocation } from "react-router-dom";
import RecetasA from "./components/Argentina/recetas";
import RecetasB from "./components/Brasil/recetasB";
import RecetasP from "./components/Peru/recetasP";

function App() {
  // const location = useLocation();

  return (
    <>
      {/* {location.pathname !== "/arg" && <Nav />} */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arg" element={<Chefs />} />
        <Route path="/peru" element={<Peru />} />
        <Route path="/brasil" element={<Brasil />} />
        <Route path="/recetasArg" element={<RecetasA />}></Route>
        <Route path="/recetasPeru" element={<RecetasP />}></Route>
        <Route path="/recetasBrasil" element={<RecetasB />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
