import React from "react";
import styles from "../Peru/index.module.css";
import images1 from "../../images/MarioCespedes.jpg";
import images2 from "../../images/virgilio-martinez-_gourmet.jpg";
import images3 from "../../images/gaston.jpg";
import images4 from "../../images/Micha--700x450.jpg";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className={styles.gridConteiner}>
      <div className={styles.card}>
        <img src={images1} alt="Mario Céspedes" />
        <h3>Mario Céspedes (Perú)</h3>
        <p>
          <strong>Especialidad:</strong> Cocina peruana y fusión.
        </p>
        <p>
          <strong>Restaurantes:</strong> Fundador de <em>Ronda 14</em> y{" "}
          <em>Arraigo</em> en España.
        </p>
        <p>
          <strong>Reconocimiento:</strong> Conocido por fusionar la gastronomía
          peruana con influencias japonesas y españolas, destacando la cocina
          nikkei.
        </p>
        <div className={styles.button}>
          <Link to={"/recetasPeru"}>
            <button className={styles.btn}>Recetas</button>
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <img src={images2} alt="Chef Virgilio Martínez" />
        <h3>Virgilio Martínez (Perú)</h3>
        <p>
          <strong>Especialidad:</strong> Cocina peruana de vanguardia, con
          enfoque en ingredientes nativos.
        </p>
        <p>
          <strong>Restaurantes:</strong> Central (Lima), Mil (Cusco).
        </p>
        <p>
          <strong>Reconocimiento:</strong> Central ha sido reconocido como uno
          de los mejores restaurantes del mundo, y Martínez destaca por su
          exploración de la biodiversidad peruana.
        </p>
        <div className={styles.button}>
          <Link to={"/recetasPeru"}>
            <button className={styles.btn}>Recetas</button>
          </Link>
        </div>
      </div>

      <div className={styles.card}>
        <img src={images3} alt="Chef Gastón Acurio" />
        <h3>Gastón Acurio (Perú)</h3>
        <p>
          <strong>Especialidad:</strong> Cocina peruana tradicional con un
          enfoque moderno.
        </p>
        <p>
          <strong>Restaurantes:</strong> Astrid y Gastón (Lima), Tanta (Lima y
          otros lugares internacionales).
        </p>
        <p>
          <strong>Reconocimiento:</strong> Acurio es uno de los chefs más
          importantes en la internacionalización de la cocina peruana y ha sido
          una figura clave en el movimiento de la gastronomía latinoamericana.
        </p>
        <div className={styles.button}>
          <Link to={"/recetasPeru"}>
            <button className={styles.btn}>Recetas</button>
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <img src={images4} alt="Chef Micha Tsumura" />
        <h3>Mitsuharu Tsumura (Perú)</h3>
        <p>
          <strong>Especialidad:</strong> Cocina Nikkei, fusión de la gastronomía
          peruana y japonesa.
        </p>
        <p>
          <strong>Restaurantes:</strong> Maido (Lima).
        </p>
        <p>
          <strong>Reconocimiento:</strong> Su restaurante Maido ha sido elegido
          como uno de los mejores de América Latina y el mundo. Es pionero en la
          difusión de la cocina Nikkei.
        </p>
        <div className={styles.button}>
          <Link to={"/recetasPeru"}>
            <button className={styles.btn}>Recetas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
