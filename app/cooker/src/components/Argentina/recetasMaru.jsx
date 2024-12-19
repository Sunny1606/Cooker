import React from "react";
import style from "../Argentina/recetas.module.css";
import { useEffect } from "react";
import image from "../../images/Blog-1970-01-20-0141514596.jpg";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.conteiner}>
      <h2>Rogel</h2>
      <img
        src={image}
        alt="rogel"
        style={{ height: "300px", width: "300px", borderRadius: "10px" }}
      />

      <h4>Ingredientes</h4>
      <h5>Masa</h5>
      <ul>
        <li>Dulce de leche Cantidad necesaria</li>
        <li>Agua 1 Vaso</li>
        <li>Manteca 150 g</li>
        <li>Yemas 12 Unidades</li>
        <li>Huevos 2 Unidades</li>
        <li>Harina Cantidad necesaria</li>
      </ul>
      <h4>Merengue Italiano</h4>
      <ul>
        <li>Claras De Huevo 1 Taza</li>
        <li>Azúcar 2 Vasos</li>
      </ul>
      <h4>Preparación de la Receta</h4>
      <h5>Masa</h5>
      <ul>
        <li>
          Derretir la manteca con el agua. Aparte en la batidora con el gancho
          para amasar colocar las yemas, los huevos y la pizca de sal. Agregar
          el agua y la manteca, incorporar harina de a poco hasta que se forma
          una masa que se desprenda de los bordes. Terminar la masa en la mesada
          y hacer pequeños bollitos. Estirarlos sobre una fuente redonda,
          pincharlos con un tenedor y colocarlos en el horno precalentado y
          fuerte por 6 a 10 minutos.
        </li>
      </ul>
      <h5>Merengue</h5>
      <ul>
        <li>
          Hacer un almíbar con el azúcar cubierto de agua. Cocinar hasta punto
          bolita blanda e incorporarlo en forma de hilo sobre las claras
          batidas. Batir todo hasta que se enfríe.
        </li>
      </ul>
      <h5>Armado</h5>
      <p>
        Intercalar las capas de masa con dulce de leche y terminar con el
        merengue italiano.
      </p>
    </div>
  );
}
