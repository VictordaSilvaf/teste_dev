import React from 'react'
import styles from "./CategorySection.module.css"
import image from "../assets/null.png"
import image2 from "../assets/eletrica.png"
import image3 from "../assets/Group19.png"
import image4 from "../assets/thinkingWoman.png"
import image5 from "../assets/whiteYellowCircle.png"
import image6 from "../assets/thumbs-up-sharp.png"
import CategoryList from './CategoryList'

export default function CategorySection() {
  return (
    <main className={styles.categoryContainer}>
        <figure className={styles.layoutFigure}>
           <div className={styles.background}></div>
           <text className={styles.categoryText}>Categorias</text>
           <img src={image} alt="Translucid circle" className={styles.null}/>
           <CategoryList />
           <text className={styles.optionText}>SUA MELHOR OPÇÂO</text>
           <img src={image2} alt="eletrica Shop" className={styles.shopImage} />
           <text className={styles.shopText}>Desde 1970 somos especializados em materiais elétricos, sendo<br />
                              uma das principais distribuidoras do setor.<br /> 
                              Oferecemos os melhores produtos, com o preço que cabe no seu bolso<br /> 
                              e atende todas as necessidades do seu dia a dia.<br />
                              Aqui você irá encontrar lustres, luminárias, utilidades domésticas,<br /> 
                              ferramentas, acessórios, lâmpadas, fios e cabos, quadros de<br /> 
                              distribuição, caixas de entrada padrão Eletropaulo, materiais<br /> 
                              elétricos em geral, equipamentos de segurança e comunicação.
           </text>
           <button type="button" className={styles.knowButton}>SAIBA MAIS SOBRE NÓS</button>
           <div className={styles.blackSquare}></div>
           <div className={styles.yellowRectangle}></div>
           <div className={styles.lampBackground}></div>
           <img src={image5} alt="circulo branco e laranja"  className={styles.borderOrange}/>
           <img src={image6} alt="joinha" className={styles.thumbsUp} />
           <img src={image3} alt="Bolhas do background" className={styles.anotherBubbles}/>
           <img src={image4} alt="Mulher pensando" className={styles.thinkingWoman}/>
           <button type='button' className={styles.salesButton}>ACIONE NOSSO TELEVENDAS</button>
        </figure>
    </main>
  )
}
