import React from 'react'
import image from '/src/images/caucasian-male-chef-frying-cut-600nw-2385753567.webp'
import styles from "../Home/Home.module.css"

export default function Home() {
  return (
   <div className={styles.conteiner}>
    <h2 className={styles.h2}>CHEFS IN THE KITCHEN, ALWAYS READY AND ON FIRE</h2>
    <img className={styles.img} src= {image} alt="" /> 
   </div>
  )
}


