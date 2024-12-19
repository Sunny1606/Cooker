import React from "react";
import style from "../Argentina/recetas.module.css";
import { useEffect } from "react";
import image1 from "../../images/ragu_de_ternera_73676_600_square.jpg";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.conteiner}>
      <h2>Ragú de Carne con Patatas Delfina</h2>
      <img
        src={image1}
        alt="imagen ragu"
        style={{ width: "300px", height: "300px", borderRadius: "10px" }}
      />
      <h3>Ingredientes</h3>
      <ul>
        <li>Cebolla 1 Unidad</li>
        <li>Carne 1 kg</li>
        <li>Apio 3 Tallos</li>
        <li>Granos de pimienta Cantidad necesaria</li>
        <li>Pimentón 1 cda.</li>
        <li>Extracto de tomate 1 cda</li>
        <li>Aceite de oliva Cantidad necesaria</li>
        <li>Hojas de romero A gusto , Sal Cantidad necesaria</li>
        <li>Caldo 350 cc</li>
        <li>Vino tinto 400 cc</li>
        <li>Zanahoria 1 Unidad</li>
        <li>Harina 3 cdas.</li>
        <li>Hongos 200 g</li>
      </ul>
      <h3>Para las patatas Delfina</h3>
      <ul>
        <li>Manteca 100 g</li>
        <li>Leche 1 Taza</li>
        <li>Puré de patatas 500 gr</li>
        <li>Sal Cantidad necesaria</li>
        <li>Harina 150 g</li>
        <li>Pimienta Cantidad necesaria</li>
        <li>Aceite para freir Cantidad necesaria</li>
        <li>Huevos 4 Unidades</li>
      </ul>
      <hr />
      <h3>Preparación de la Receta</h3>
      <ul>
        <li>
          Cortar la carne en cubos de 2 cm. En un tazón, mezclar la carne con el
          pimentón, la harina, sal a gusto y reservar. Cortar el apio, la
          zanahoria y la cebolla en cubos. Incorporarlos en una olla con aceite
          de oliva, mezclar y rehogar unos minutos. Añadir la carne
          condimentada, el extracto de tomate, el vino tinto, hojas de romero y
          granos de pimienta a gusto. Permitir que el alcohol se evapore. Cubrir
          la carne con el caldo, disminuir el fuego, tapar y cocinar por 50
          minutos. Luego, agregar los hongos portobellos cortados en cuartos y
          cocinar por 5 minutos más. Para las patatas delfina, colocar la
          manteca y la leche en una olla pequeña al fuego. Cuando esté caliente,
          agregar la harina en un tiempo y revolver hasta formar un bollo,
          despegándolo de los bordes. Cocer unos minutos para que se cocine la
          harina. Luego agregar los huevos uno a uno, mezclando bien entre cada
          incorporación y uniendo la masa hasta obtener una consistencia
          uniforme. En un tazón, colocar el puré de patatas, agregar la masa,
          condimentar con sal y unir todo con la ayuda de una espátula. Freír la
          preparación en aceite caliente, dando forma a las patatas con una
          cuchara. Retirar y salar a gusto. En un bol, servir el ragú con su
          jugo y disponer las patatas por encima de la carne.
        </li>
      </ul>
    </div>
  );
}
