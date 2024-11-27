import React from "react";
import style from "./Nav.module.css";
import image from "/src/images/chef-logo-chefs-hat-knives-600nw-1691316280.jpg";
import { Link } from "react-router-dom";
// import icons from "../Nav/icons";
import imagen1 from "../../images/flag-for-argentina_.png";
import imagen2 from "../../images/flag-for-brazil_.png";
import imagen3 from "../../images/flag-for-peru_.png";

export default function Nav() {
  return (
    <div className={style.conteinerBtn}>
      <Link to={"/"}>
        <img className={style.img} src={image} alt="Home" />
      </Link>

      <Link to="/arg">
        <button className={style.btn}>
          <img
            src={imagen1}
            alt="flagArgentina"
            style={{ width: "30px", height: "auto", marginRight: "8px" }}
          />
          ARGENTINA
        </button>
      </Link>

      <Link to={"/brasil"}>
        <button className={style.btn}>
          <img
            src={imagen2}
            alt="flagBrasil"
            style={{ width: "30px", height: "auto", marginRight: "8px" }}
          />
          BRASIL
        </button>
      </Link>

      <Link to={"/peru"}>
        <button className={style.btn}>
          <img
            src={imagen3}
            alt="flagPeru"
            style={{ width: "30px", height: "auto", marginRight: "8px" }}
          />
          PERU
        </button>{" "}
      </Link>
    </div>
  );
}
