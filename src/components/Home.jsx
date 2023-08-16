import React from 'react';
import styles from "./Home.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import image from "../assets/EllipseSemBorda.png";
import image2 from "../assets/pricetags.jpg";
import image3 from "../assets/Group19.png";
import image4 from "../assets/mulher.png";
import image5 from "../assets/stars.png";

function Home() {
  return (
    
    <div className={styles.home}>
          <div className={styles.homeText}>
              <h1 className={`text-wrap text-break text-start  ${styles.customH1}`}>ILUMINE O SEU
                  DIA A DIA</h1>
              <h6 className={`text-wrap text-break text-start  ${styles.customH6}`}>

                  Aqui na Eletrica J.Santos queremos trazer mais luz para o seu dia<br />
                  a dia! Temos produtos para toda sua casa com a melhor <br />
                  qualidade e atendimento da região!

              </h6>
              <button type="button" className={styles.button1}>VEJA NOSSOS PRODUTOS</button>
              <button type="button" className={styles.button2}>NOS CONHEÇA MELHOR</button>
              <section className={styles.sectionRoll}>
                <AiOutlineArrowDown />
                <span className={styles.rollText}>Role para ver mais</span>
              </section>
            </div>

              
            <figure className={styles.tag}>
                <span className={styles.lightSector} />   
                <div className={styles.imageContainer}>
                <img src={image} alt="elipse" className={styles.elipse} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  className={styles.whiteCircle}
                >
                    <circle cx="23.5" cy="23.5" r="22.6034" fill="white" />
                </svg>
                <img src={image2} alt="price tags" className={styles.image2} />
                <img src={image3} alt="circles top" className={styles.image3} />
                <img src={image3} alt="circles bottom" className={styles.bottonCircle}/>
                <img src={image4} alt="happy woman" className={styles.image4}/>
                <div className={styles.starContainer}>
                    <img src={image5} alt="stars" className={styles.star}/>
                </div>
                  </div>
            </figure>
    </div>
  )
}

export default Home;
