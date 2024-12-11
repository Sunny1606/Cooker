import React from "react";
import style from "../Argentina/recetas.module.css";
import { useEffect } from "react";
import gnocci from "../../images/15475068655c3d14b152c7a.jpg";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.conteiner}>
      <h2>Gnocci di semola a la romana</h2>
      <img
        src={gnocci}
        alt="a la romana"
        style={{ height: "300px", width: "300px", borderRadius: "10px" }}
      />
      <h4>Ingredientes</h4>
      <ul>
        <li>2 lt de leche (puede ser 1 de leche y 1 de agua)</li>
        <li>75 g manteca</li>
        <li>2-3 hojitas de salvia (optativo)</li>
        <li>500 g harina semolin fina</li>
        <li>100 g queso parmesano rallado</li>
        <li>100 g de queso fundible a gusto e piacere cortado en cubos</li>
        <li>20 g Sal marina gruesa</li>
        <li>2 yemas de huevo (optativas)</li>
      </ul>
      <h4>PREPARACION</h4>
      <p>
        Poner a hervir la leche con la sal y 50 g de manteca. Verter en forma de
        lluvia la harina y mezclar primero con batidor luego con cuchara de
        madera. Cocinar 15 minutos bajando el fuego. Retirar de la hornalla y
        agregar la mitad del queso rallado y (si deseado) las yemas de huevo
        Verter en una placa de metal levemente aceitada o plastico resistente la
        mezcla en caliente manteniendo un espesor de al menos 1 cm o mas si
        deseado Emparejar el nivel superior con una servilleta limpia y
        previamente mojada Poner a enfriar por media hora. Cortar en circulos
        (tradicional) o en cuadrados usando un cortapasta mojado en agua o un
        cuchillo. Derretir el resto de la manteca con la salvia en el fondo de
        una olla o placa para horno, dorar los gnocchi cortados, recubrir con el
        queso y hornear hasta dorar.
      </p>
    </div>
  );
}
