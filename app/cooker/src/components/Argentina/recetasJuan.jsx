import React from "react";
import style from "../Argentina/recetas.module.css";
import { useEffect } from "react";
import image1 from "../../images/214.jpg";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.conteiner}>
      <h2>Pan Alemán</h2>
      <img
        src={image1}
        alt="pan aleman"
        style={{ height: "300px", width: "300px", borderRadius: "10px" }}
      />

      <h4>Ingredientes</h4>
      <ul>
        <li>Agua fría 250 cc</li>
        <li>Azúcar 10 grs</li>
        <li>Harina 0000 500 grs</li>
        <li>Cerveza 50 cc</li>
        <li>Leche en polvo 100 grs</li>
        <li>Levadura fresca 50 grs</li>
        <li>Sal 10 grs</li>
      </ul>

      <h4>Preparación de la Receta</h4>
      <ul>
        <li>
          Realizar una corona con la harina, la sal y agregar en el centro
          levadura, azúcar, leche en polvo, cerveza y agua. Amasar hasta obtener
          una masa lisa y homogénea. Dejar levar. Desgasificar la masa y dividir
          en porciones de 250 gramos. Formar bollos y dar la forma deseada.
          Acomodar en una placa previamente enmantecada y dejar leudar. Pincelar
          con doradura y luego aplicar dos cortes en la parte superior del pan.
          Hornear las piezas a 200 °C durante 25 o 35 minutos.
        </li>
      </ul>
    </div>
  );
}
