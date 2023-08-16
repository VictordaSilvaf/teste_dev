import React from 'react'
import styles from "./Products.module.css"
import image from "../assets/null.png"
import image2 from "../assets/Group19.png"
import List from './List'

export default function Products() {
  return (
    <main className={ styles.products}>
      <figure className={styles.centralFigure}>
         <div className={styles.background1}></div>
         <img src={image} alt="translucid circles" className={styles.null}/>
         <img src={image2} alt="hide circles" className={styles.hide} />
         <text className={styles.hightlightProducs}>PRODUTOS EM DESTAQUE</text>
         <List />
      </figure>
    </main>
  )
}
