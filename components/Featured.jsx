import styles from "../styles/Featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = [
    "/img/featured.jpg",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
    "/img/featured4.jpg",
]

const title = [
    ""
]

const Featured = () => {
    
    const [index, setIndex] = useState(0);
    
    const handleArrow = (direction) => {
        if(direction === "l"){
            setIndex(index !== 0 ? index - 1 : 3)
        }
        if(direction === "r"){
            setIndex(index !== 3 ? index + 1 : 0)
        }
    }

    console.log(index)

  return (
    <div className={styles.container}>
        
        <div className={styles.overlay}>
            
        </div>
        <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")} >
            <Image src="/img/arrowl.png" alt="" layout='fill' objectFit="contain" />
        </div>
        
        <div className={styles.wrapper} style={{ transform: `translateX(${ -100 * index}vw)`}}>
            {images.map((img, i) => (
                <div className={styles.imgContainer}  key={i}>
                        <Image src={img} alt="" layout='fill' objectFit="cover" />
                </div>
            ))}
        </div>

        <div className={styles.hero}>
            <h1>
                We offer the best meals <span className={styles.tav}>catered</span> to your satisfaction
            </h1>
            <Link href="/" passHref>
                <button className={styles.btn}><span>Order </span></button>
            </Link>
        </div>

        <div className={styles.arrowContainer} style={{ right: 0}} onClick={() => handleArrow("r")}>
            <Image src="/img/arrowr.png" alt="" layout='fill' objectFit="contain" />
        </div>
        
    </div>
  )
}

export default Featured