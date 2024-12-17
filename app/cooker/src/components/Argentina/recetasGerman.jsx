import React from "react";
import style from "../Argentina/recetas.module.css";
import { useEffect } from "react";
import image from "../../images/images.jpg";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.conteiner}>
      <h2>Albóndigas de cordero con lentejas</h2>
      <img
        src={image}
        alt="albondigas"
        style={{ height: "300px", width: "300px", borderRadius: "10px" }}
      />
      <h3>Ingredientes</h3>
      <ul>
        <li>Pasas de uva rubia 50 g</li>
        <li>Cebolla 1 Unidad</li>
        <li>Almendras 100 g</li>
        <li>Pan Lactal 2 Rodajas</li>
        <li>Sal y pimienta A gusto</li>
        <li>Cilantro 1 cda.</li>
        <li>Carne de cordero picada 750 g</li>
        <li>Huevo 1 Unidad</li>
        <li>Aceite de oliva 30 cc</li>
      </ul>
      <h3>Guarnición</h3>
      <ul>
        <li>Tomillo 1 Rama</li>
        <li>Lentejas rojas 300 g</li>
        <li>Romero 1 Rama</li>
        <li>Aceite de oliva 1 cda.</li>
        <li>Zanahoria 1 Unidad</li>
        <li>Menta 2 Ramas</li>
        <li>Ajo 1 Diente</li>
        <li>Sal y pimienta A gusto</li>
        <li>Caldo de verduras 1 L</li>
        <li>Comino A gusto Curry A gusto</li>
        <li>Apio 2 Ramas</li>
        <li>Cebolla 1 Unidad</li>
        <li>Cilantro 2 Ramas</li>
      </ul>
      <h3>Salsa</h3>
      <ul>
        <li>Yogurt Natural 300 g</li>
        <li>Sal y pimienta A gusto</li>
        <li>Limón ½ Unidad</li>
        <li>Menta 1 cda.</li>
      </ul>

      <hr />
      <h3>Preparación de la Receta</h3>
      <ul>
        <li>
          Pique finamente la cebolla y el cilantro. Elimine la corteza del pan y
          pique con un cuchillo. Casque el huevo y bata ligeramente. Pele y
          tueste las almendras. En un bowl mezcle la carne con la cebolla, las
          pasas de uva, la miga de pan, el huevo, las almendras, el cilantro,
          sal y pimienta. Tome porciones de carne y forme esferas de tamaño
          regular. En una sartén con aceite de oliva dore las albóndigas por
          todos sus lados. Pase las albóndigas a una placa y termine la cocción
          en horno precalentado a 200º C durante 5 a 7 minutos.
        </li>
      </ul>
      <h4>Guarnición</h4>
      <ul>
        <li>
          Pele y corte la cebolla, el apio y la zanahoria en brunoise. Pique
          finamente el ajo. Forme un bouquet con las hierbas frescas. En una
          sartén caliente con aceite de oliva rehogue la cebolla. Incorpore las
          zanahorias y el apio, cocine hasta que estén blandas. Condimente con
          el ajo, pimienta, curry y comino. Agregue las lentejas, el caldo hasta
          cubrir y el bouquet de hierbas. Cocine a fuego bajo durante 20 minutos
          aproximadamente. Rectifique la sazón. Añada más caldo durante la
          cocción si la preparación lo requiere.
        </li>
      </ul>
      <h4>Salsa</h4>
      <ul>
        <li>
          Pique la menta. Ralle la cáscara del limón. En un bowl mezcle el
          yogurt, la menta, la cáscara de limón, sal y pimienta.
        </li>
      </ul>
      <h4>Presentación</h4>
      <ul>
        <li>
          Sirva una porción de lentejas en la base de un plato, encima las
          albóndigas. Rocíe con la salsa.
        </li>
      </ul>
    </div>
  );
}
