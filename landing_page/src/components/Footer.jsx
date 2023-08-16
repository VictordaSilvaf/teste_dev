import React from "react";
import styles from "./Footer.module.css";
import image from "../assets/logoShop.png";
import image2 from "../assets/logo-whatsapp.png";
import image3 from "../assets/logo-instagram.png";
import image4 from "../assets/logo-facebook.png";
import image5 from "../assets/icon3.png"
import image6 from "../assets/Group19.png"

function Footer() {

    return  (
        <div className={styles.footer}>
            <img src={image} alt="Shop Logo" className={styles.logo}/>
            <span className={styles.footerText}>Venha na Eletrica J.Santos e garanta a melhor<br/>
                  opção pra sua casa</span>
            <div className={styles.icons}>
                <span className={styles.iconText}>NOS SIGA NAS REDES</span>
                <div className={styles.iconLayer}>
                  <img src={image2} alt="whatsapp"  className={styles.logoWhatsapp}/>
                  <img src={image3} alt="instagram" className={styles.logoInstagram}/>
                  <img src={image4} alt="facebook"  className={styles.logoFacebook} />
                </div>
            </div>
            <div className={styles.line}></div>
        
            <span className={styles.bottomText}>© Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados</span>
            <text className={styles.developerText}>Desenvolvido por <img src={image5} alt="" /></text>
            <img src={image6} alt="Bubbles Footer" className={styles.bubbleFooter}/>
        </div>
    )
}

export default Footer;