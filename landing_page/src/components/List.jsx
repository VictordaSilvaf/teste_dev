import React from 'react'
import image from "../assets/lightbulbs.png"
import image2 from "../assets/solitaryBulb.png"
import image3 from "../assets/extension.png"
import image4 from "../assets/toolKit.png"
import image5 from "../assets/fork.png"
import image6 from "../assets/shower.png"
import image7 from "../assets/fan.png"
import image8 from "../assets/Plug.png"
import styles from "./List.module.css"



export default function List() {
    const productList = [
        { img: image,
          name: "Lustre suspenso rústico",
          category: "Lustres",
          fullPrice : " R$ 1,500",
          discount:  " R$ 1,000",
          credit: "ou em 3x de R$ 333,33"  
        },
        { img: image2,
            name: "Lustre suspenso rústico",
            category: "Lâmpada",
            fullPrice : " R$ 60,00",
            discount:  " R$ 45,00",
            credit: "ou em 2x de R$ 22,50"  
          },
          { img: image3,
            name: "Extensão Nobreak 6 plugs",
            category: "Acessórios",
            fullPrice : " R$ 25,00",
            discount:  " R$ 17,00",
            credit: ""  
          },
          { img: image4,
            name: "Kit de ferramentas",
            category: "Ferramentas",
            fullPrice : " R$ 100,00",
            discount:  " R$ 80,00",
            credit: "ou em 2x de R$ 40,00"  
          },
          { img: image5,
            name: "Garfos de mesa inox",
            category: "Utensílios domésticos",
            fullPrice : " R$ 15,00",
            discount:  " R$ 8,00",
            credit: ""  
          },
          { img: image6,
            name: "Chuveiro elétrico",
            category: "Acessórios",
            fullPrice : " R$ 120,00",
            discount:  " R$ 100,00",
            credit: "ou em 4x de R$ 25,00"  
          },
          { img: image7,
            name: "Ventilador parede e mesa",
            category: "Acessórios",
            fullPrice : " R$ 50,00",
            discount:  " R$ 30,00",
            credit: ""  
          },
          { img: image8,
            name: "Tomada 2 plugs",
            category: "Acessórios",
            fullPrice : " R$ 20,00",
            discount:  " R$ 10,00",
            credit: ""  
          }
    ]
  
  return (
    <div className={styles.cardContainer}>
      { productList.map((item) => (
         <div className={styles.productCard}>
            <img src={item.img} alt={item.name} className={styles.imageCard}/>
            <span className={styles.blackBar}></span>
            <span className={styles.cardName}>{item.name}</span>
            <span className={styles.categoriesTag}>{item.category}</span>
            <span className={styles.fullPrice}>{item.fullPrice}</span>
            <span className={styles.discount}>{item.discount}</span>
            <span className={styles.creditOption}>{item.credit}</span>
         </div>
      ))}
    </div>
  )
}
