import React from "react";
import style from "./Nav.module.css";
import image from "/src/images/chef-logo-chefs-hat-knives-600nw-1691316280.jpg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={style.conteinerBtn}>
      <img className={style.img} src={image} alt="" />
      <Link to={"/chefs"}>
        <button className={style.btn}>ARGENTINA</button>
      </Link>
      <Link to={""}>
        <button className={style.btn}>BRASIL</button>
      </Link>
      <Link to={""}>
        <button className={style.btn}>PERU</button>
      </Link>
    </div>
  );
}
