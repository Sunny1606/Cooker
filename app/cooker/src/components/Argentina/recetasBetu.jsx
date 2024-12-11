import React from "react";
import macarons from "../../images/damian-betular-macarons_8af00972_1138071453_240229095020_1000x1249.jpg";
import macarons1 from "../../images/receta-macarons-damian-batular_38559cc8_1138071453_240229094930_1000x1250.jpg";
import style from "../Argentina/recetas.module.css";
import { useEffect } from "react";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.conteiner}>
      <h2>Macarons</h2>
      <img
        src={macarons}
        alt="macarons"
        style={{ height: "300px", width: "300px", borderRadius: "10px" }}
      />
      <h4>Ingredientes:</h4>
      <ul>
        <li>
          <li>Manteca (cantidad necesaria)</li>
          <li>125 g de harina de almendras</li>
          <li>125 g de azúcar impalpable</li>
          <li>125 g de claras de huevo (4 unidades aprox.)</li>
          <li>100 g de azúcar común</li>
          <li>Colorante vegetal del color que se desee</li>
        </li>
      </ul>
      <h4>Ingredientes para el relleno:</h4>
      <ul>
        <li>
          <li>Crema de leche</li>
          <li>Dulce de leche</li>
          <li>Café</li>
          <li>Pasta de Fresa</li>
        </li>
      </ul>
      <h4>Ingredientes para Ganache: (opcional)</h4>
      <ul>
        <li>100 cc de crema de leche</li>
        <li>200 g del chocolate elegido (negro o blanco)</li>
      </ul>
      <h4>Paso a Paso</h4>
      <ul>
        <li>
          <strong>Paso 1:</strong> Primero de todo deberás poner un bowl a baño
          María con las claras y el azúcar. Bate hasta que se convierta en una
          mezcla homogénea.
        </li>
        <li>
          <strong>Paso 2:</strong> Una vez que esté unido, sácalo del fuego y
          batir con batidora eléctrica hasta que quede firme (como un merengue).
        </li>
        <li>
          <strong>Paso 3:</strong> A continuación, suma la harina previamente
          tamizada con movimiento envolventes para no perder el aire obtenido.
          Si es necesario, integrarla en dos etapas.
        </li>
        <li>
          <strong>Paso 4:</strong> Colorea la mezcla del color que se quiera con
          el colorante vegetal elegido. Si se desean varios colores, separa en
          partes iguales de mezcla en diferentes bowls y tíñelos integrando el
          colorante con espátula.
        </li>
        <li>
          <strong>Paso 5:</strong> Coloca la preparación en una manga y ponla en
          una placa enmantecada y espolvoreada con azúcar impalpable. Con la
          manga, dale forma de tapitas a la mezcla.
        </li>
        <li>
          <strong>Paso 6:</strong> Deberás dejar descansar por 2 horas y poner a
          cocinar en el horno a una temperatura de 160 grados por
          aproximadamente 4 minutos de cada lado. Deja enfriar y despegar.
        </li>
        <li>
          <strong>Paso 7:</strong> Emulsiona la crema de leche con la cantidad
          que se desee del sabor del relleno, ya sea frutilla, café, menta o
          chocolate.
        </li>
        <li>
          <strong>Paso 8:</strong> Si se desea hacer una ganache, pon a calentar
          la crema y añádela sobre el chocolate picado, posteriormente deja
          integrar y montar.
        </li>
        <li>
          <strong>Paso 9:</strong> Deja enfriar el relleno y rellena los
          macarons con una manga.
        </li>
      </ul>
      <img
        src={macarons1}
        alt="macarons"
        style={{
          height: "300px",
          width: "300px",
          borderRadius: "10px",
          marginLeft: "470px",
        }}
      />
    </div>
  );
}
