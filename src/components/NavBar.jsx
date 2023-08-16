import React from "react";
import styles from './NavBar.module.css'
import image from "../assets/Group13.jpg"
import image2 from "../assets/Group.jpg"

function NavBar() {
    return (
        <div className={styles.NavBarContainer }>
          <section> 
        
              <img src={image} alt="bubbles Logo" className={styles.bubbles}/>
              <img src={image2} alt="shop logo" className={styles.shopLogo}/>
          </section>
        

          <div className={styles.navicon}>
               <nav className={styles.nav}>
                 <ul>
                   <li>
                       <text>Home</text>
                   </li>
                   <li className={styles.dropbox}>

                    <div class="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <text className={styles.buttonText}>Categorias</text>
                        </button>
                      <div className="dropdown-menu fs-1" aria-labelledby="dropdownMenuButton">
                         <span className="dropdown-item">Lâmpadas</span>
                         <span className="dropdown-item">Lustres</span>
                         <span className="dropdown-item">Luminárias</span>
                         <span className="dropdown-item">Decorações</span>
                         <span className="dropdown-item">Acessórios</span>
                         <span className="dropdown-item">Ferramentas</span>
                         <span className="dropdown-item">Utensílios Domésticos</span>
                         <span className="dropdown-item">Cabos</span>
                 </div>
          </div>
          
                   </li>
                   <li>
                        <text>Sobre</text>
                   </li>
                   <li>
                     <text>Localização</text>
                   </li>
                   <li>
                     <button type="button" className={styles.contactButton}>
                       <text className={styles.ButtonText}> Contato </text>
                     </button>
                   </li>
                 </ul>
               </nav>
            </div>

        </div>
    )
}

export default NavBar;