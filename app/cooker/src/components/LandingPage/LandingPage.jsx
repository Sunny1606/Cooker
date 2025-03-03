import React from "react";
import style from "./page.module.css";
import { Link } from "react-router-dom";

import image from "/src/images/chef-logo-chefs-hat-knives-600nw-1691316280.jpg";

export default function LandingPage() {
  return (
    <div className={style.buttonConteiner}>
      {/* //va a ser el ICONO  */}

      <div className={style.imageConteiner}>
        <img className={style.image} src={image} alt="logo" />
      </div>

      <button className={style.button}>
        <Link className={style.link} to={"/home"}>
          BIENVENIDOS
        </Link>
      </button>
    </div>
  );
}
