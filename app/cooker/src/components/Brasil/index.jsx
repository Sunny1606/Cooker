import React from "react";
// import image1 from ""
import styles from "../Brasil/index.module.css";
import images1 from "../../images/5B3Qw3Ye7_600x600__1.jpg";
import images2 from "../../images/rizzo_best_female_2014-400x342.jpg";
import images3 from "../../images/Chef-Roberta-Sudbrack-entrevista-paginas-azuis-o-povo-1.jpg";
import images4 from "../../images/thomas-troisgros-la-9-1708-31e483b0.jpg";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className={styles.gridConteiner}>
      <div className={styles.card}>
        <img src={images1} alt="Chef Alex Atala" />
        <h3>Alex Atala (Brasil)</h3>
        <p>
          <strong>Especialidad:</strong> Cocina brasileña contemporánea,
          ingredientes amazónicos.
        </p>
        <p>
          <strong>Restaurantes:</strong> D.O.M., Dalva e Dito.
        </p>
        <p>
          <strong>Reconocimiento:</strong> Reconocido internacionalmente por su
          enfoque innovador y sostenible de la gastronomía brasileña. D.O.M. ha
          estado en la lista de los 50 mejores restaurantes del mundo.
        </p>
        <div className={styles.button}>
          <Link to={"/recetasBrasil"}>
            <button className={styles.btn}>Recetas</button>
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <img src={images2} alt="Chef Helena Rizzo" />
        <h3>Helena Rizzo (Brasil)</h3>
        <p>
          <strong>Especialidad:</strong> Alta cocina brasileña con influencias
          contemporáneas.
        </p>
        <p>
          <strong>Restaurantes:</strong> Maní (São Paulo).
        </p>
        <p>
          <strong>Reconocimiento:</strong> Elegida como la mejor chef femenina
          del mundo en 2014 por la revista <i>Restaurant</i>. Conocida por su
          enfoque en ingredientes locales y técnicas innovadoras.
        </p>
        <div className={styles.button}>
          <Link to={"/recetasBrasil"}>
            <button className={styles.btn}>Recetas</button>
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <img src={images3} alt="Chef Roberta Sudbrack" />
        <h3>Roberta Sudbrack (Brasil)</h3>
        <p>
          <strong>Especialidad:</strong> Alta cocina brasileña con énfasis en
          ingredientes locales y técnicas tradicionales.
        </p>
        <p>
          <strong>Restaurantes:</strong> Sud, o pássaro verde (Río de Janeiro).
        </p>
        <p>
          <strong>Reconocimiento:</strong> Fue chef del Palacio de la Alvorada y
          galardonada con múltiples estrellas Michelin.
        </p>
        <div className={styles.button}>
          <Link to={"/recetasBrasil"}>
            <button className={styles.btn}>Recetas</button>
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <img src={images4} alt="Chef Thomas Troisgros" />
        <h3>Thomas Troisgros (Brasil)</h3>
        <p>
          <strong>Especialidad:</strong> Cocina franco-brasileña moderna.
        </p>
        <p>
          <strong>Restaurantes:</strong> Olympe (Río de Janeiro).
        </p>
        <p>
          <strong>Reconocimiento:</strong> Miembro de la renombrada familia
          Troisgros, continuando la tradición culinaria en Brasil.
        </p>
        <div className={styles.button}>
          <Link to={"/recetasBrasil"}>
            <button className={styles.btn}>Recetas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
