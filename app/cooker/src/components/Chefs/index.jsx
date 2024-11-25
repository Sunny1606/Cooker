import React from "react";
import styles from "../Chefs/index.module.css";
import images1 from "../../images/damian.jpg";
import images2 from "../../images/Dolli-Irigoyen-Contratapa.jpg";
import images3 from "../../images/chef.jpg";
import images4 from "../../images/OVUKNWMN7RC4DJOTHMHIFX2WWY.avif";
import images5 from "../../images/md.jpg";

export default function Index() {
  return (
    <div className={styles.gridConteiner}>
      <div className={styles.card}>
        <img src={images1} alt="" />
        <h3>Damián Betular (Argentina)</h3>
        <p>
          <strong>Especialidad:</strong> Pastelería y alta cocina argentina.
        </p>
        <p>
          <strong>Restaurantes:</strong> Betular Pâtisserie.
        </p>
        <p>
          <strong>Reconocimiento:</strong> Destacado por su participación en
          programas de cocina como jurado.
        </p>
      </div>

      <div className={styles.card}>
        <img src={images4} alt="" />
        <h3>Donato De Santis (Italia/Argentina)</h3>
        <p>
          <strong>Especialidad:</strong> Cocina italiana.
        </p>
        <p>
          <strong>Restaurantes:</strong> Cucina Paradiso.
        </p>
        <p>
          <strong>Reconocimiento:</strong> Famoso por promover la cocina
          italiana en América Latina.
        </p>
      </div>

      <div className={styles.card}>
        <img src={images2} alt="" />
        <h3>Dolli Irigoyen (Argentina)</h3>
        <p>
          <strong>Especialidad:</strong> Cocina argentina tradicional y
          contemporánea.
        </p>
        <p>
          <strong>Restaurantes:</strong> Espacio Dolli.
        </p>
        <p>
          <strong>Contribución:</strong> Reconocida por sus programas de TV y
          formación de nuevos chefs.
        </p>
      </div>

      <div className={styles.card}>
        <img src={images3} alt="" />
        <h3>Germán Martitegui (Argentina)</h3>
        <p>
          <strong>Especialidad:</strong> Alta cocina argentina.
        </p>
        <p>
          <strong>Restaurantes:</strong> Tegui.
        </p>
        <p>
          <strong>Distinción:</strong> Figura clave en la gastronomía argentina,
          con enfoque en ingredientes locales.
        </p>
      </div>
      <div className={styles.card}>
      <img src={images5} alt="" />
        <h3>Cristian Petersen (Argentina)</h3>
        <p>
          <strong>Especialidad:</strong> Cocina argentina tradicional con
          énfasis en carnes y parrilla.
        </p>
        <p>
          <strong>Restaurantes:</strong> La Tranquera, La Rosa Negra.
        </p>
        <p>
          <strong>Reconocimiento:</strong> Chef reconocido por su dominio del
          asado y la parrilla, y su participación en medios de comunicación
          culinarios.
        </p>
      </div>
    </div>
  );
}
