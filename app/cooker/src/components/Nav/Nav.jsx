import React from "react";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={style.conteinerBtn}>
      <button className={style.btn}>HOLA</button>
      <button className={style.btn}>CHAU</button>
      <button className={style.btn}>QUE TAL</button>
      <button className={style.btn}>ADIOS</button>
    </div>
  );
}
