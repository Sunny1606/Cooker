import React from "react";
import style from "./Nav.module.css";
import image from '/src/images/chef-logo-chefs-hat-knives-600nw-1691316280.jpg'


export default function Nav() {
  return (
    <div className={style.conteinerBtn}>
    <img className={style.img} src={image} alt="" />
      <button className={style.btn}>CHEFS</button>
      <button className={style.btn}>CHAU</button>
      {/* <button className={style.btn}>QUE TAL</button>
      <button className={style.btn}>ADIOS</button> */}
    </div>
  );
}
