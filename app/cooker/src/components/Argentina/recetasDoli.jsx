import React from "react";
import style from "../Argentina/recetas.module.css";
import { useEffect } from "react";
import images1 from "../../images/Pan-dulce-genoves.jpg";
import image2 from "../../images/ea07f1bf1a4190101ea084415e749759.jpg";
// import style from "../Argentina/recetas.module.css";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.conteiner}>
      <h2>Pan Dulce Genovés</h2>
      <img
        src={images1}
        alt="pan dulce"
        style={{ width: "450px", height: "300px", borderRadius: "10px" }}
      />
      <h3>Ingredientes</h3>
      <h4>Esponja</h4>
      <ul>
        <li>Leche 70 cc Harina 100 grs. Levadura 40 grs.</li>
        <li>Harina 100 grs.</li>
        <li>Harina 100 grs.</li>
        <li>Levadura 40 grs.</li>
      </ul>

      <h4>Masa</h4>
      <ul>
        <li>Manteca 200 g</li>
        <li>Extracto de malta 1 cda.</li>
        <li>Pasas de uva 150 grs.</li>
        <li>Sal Una pizca</li>
        <li>Nueces 150 g</li>
        <li>Agua de azahar 1 cdita.</li>
        <li>Esencia de almendras 1 cdita.</li>
        <li>Harina 600 grs.</li>
        <li>Huevos 5 Unidades</li>
        <li>Ralladura de naranja A gusto</li>
        <li>Cognac 30 cc</li>
        <li>Frutas abrillantadas 150 g</li>
        <li>Ralladura De Limón A gusto</li>
        <li>Avellanas 100 g</li>
        <li>Almendras 150 g</li>
        <li>Azúcar 150 grs.</li>
      </ul>

      <h3>Preparación</h3>
      <h5>Esponja</h5>
      <ul>
        <li>
          {" "}
          En un bowl disuelva la levadura con la leche, agregue el azúcar y el
          harina. Deje reposar hasta que doble su volumen.
        </li>
      </ul>
      <h5>Masa</h5>
      <ul>
        <li>
          En la mesa de trabajo coloque el harina tamizada con la sal en forma
          de corona. En el centro agregue las ralladuras de naranja y de limón,
          el extracto de malta, la escencia de vainilla, y almendras, el cognac
          y el agua de azahar. Incorpore los huevos, el azúcar, la esponja y la
          manteca pomada. Tome la masa hasta integrar todos los ingredientes.
          Forme un bollo y deje levar cubierto con un lienzo. Desgasifique sobre
          la mesada enharinada y estire con las manos. Pique groseramente las
          frutas secas y abrillantadas y mezcle en un bowl. Coloque las frutas
          en el centro de la masa y enrosque. Termine amasando para que queden
          las frutas bien repartidas. Forme los panes y deje levar nuevamente en
          los moldes para pan dulce. Corte la superficie en forma de cruz o
          triángulo, pinte con huevo y cocine en el horno a 200° C los primeros
          10 minutos y luego baje la temperatura. Termine de cocinar durante 40
          a 60 minutos aproximadamente. Retire del horno y deje enfriar,
          espolvoree con azúcar impalpable, glacé o con un fondant.
        </li>
      </ul>
      <img
        src={image2}
        alt="pan dulce"
        style={{
          width: "310px",
          height: "420px",
          borderRadius: "10px",
          marginLeft: "470px",
        }}
      />
    </div>
  );
}
