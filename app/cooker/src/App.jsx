import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/landingPage";
import Chefs from "./components/Argentina/index";
import Peru from "./components/Peru";
import Brasil from "./components/Brasil/index";
import Footer from "./components/Footer/Footer";

import RecetasA from "./components/Argentina/recetasBetu";
import RecetasB from "./components/Argentina/recetasSantis";
import RecetasC from "./components/Argentina/recetasCris";
import RecetasD from "./components/Argentina/recetasDoli";
import RecetasE from "./components/Argentina/recetasGerman";
import RecetasF from "./components/Argentina/recetasJuan";
import RecetasG from "./components/Argentina/recetasPamela";
import RecetasH from "./components/Argentina/recetasMaru";

import RecetasBrasil from "./components/Brasil/recetasB";
import RecetasP from "./components/Peru/recetasP";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isFooter = location.pathname === "/";

  return (
    <>
      {/* Muestra Nav solo si NO estás en la Landing Page */}
      {!isLandingPage && <Nav />}{" "}

      
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/home" element={<Home />} />
        <Route path="/arg" element={<Chefs />} />
        <Route path="/peru" element={<Peru />} />
        <Route path="/brasil" element={<Brasil />} />
        <Route path="/recetasBetu" element={<RecetasA />}></Route>
        <Route path="/recetasSantis" element={<RecetasB />}></Route>
        <Route path="/recetasCris" element={<RecetasC />}></Route>
        <Route path="/recetasDoli" element={<RecetasD />}></Route>
        <Route path="/recetasGerman" element={<RecetasE />}></Route>
        <Route path="/recetasJuan" element={<RecetasF />}></Route>
        <Route path="/recetasPamela" element={<RecetasG />}></Route>
        <Route path="/recetasMaru" element={<RecetasH />}></Route>

        <Route path="/recetasPeru" element={<RecetasP />}></Route>
        <Route path="/recetasBrasil" element={<RecetasBrasil />}></Route>
      </Routes>
      {!isFooter && <Footer />}
    </>
  );
}

export default App;
