import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chefs from "./components/Argentina/index";
import Peru from "./components/Peru";
import Brasil from "./components/Brasil/index";

import { useLocation } from "react-router-dom";
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
      <Footer />
    </>
  );
}

export default App;
