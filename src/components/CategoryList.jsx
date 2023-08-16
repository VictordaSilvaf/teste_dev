import React from 'react'
import styles from "../components/CategoryList.module.css"
import image from "../assets/whiteBulb.png"
import image2 from "../assets/chandelier.png"
import image3 from "../assets/candleBulb.png"
import image4 from "../assets/flowerPicture.png"
import image5 from "../assets/gym.png"
import image6 from "../assets/toolKit.png"
import image7 from "../assets/pan.png"
import image8 from "../assets/cable.png"


const categoryList = [
    { img: image,
      name: "LÂMPADAS"  
    },
    { img: image2,
      name: "LUSTRES"  
    },
    { img: image3,
      name: "LUMINÁRIAS"  
    },
    { img: image4,
      name: "DECORAÇÕES"  
    },
    { img: image5,
      name: "ACESSÓRIOS"  
    },
    { img: image6,
      name: "FERRAMENTAS"  
    },
    { img: image7,
      name: "UTENSÍLIOS DOMÉSTICOS"  
    },
    { img: image8,
      name: "CABOS"  
    },
   
]

export default function CategoryList() {
  return (
    <div className={styles.cardContainer}>
    { categoryList.map((item) => (
       <div className={styles.categoryCard}>
          <img src={item.img} alt={item.name} className={styles.imageCard}/>
          <span className={styles.categoryName}>{item.name}</span>
       </div>
    ))}
  </div>
  )
}
