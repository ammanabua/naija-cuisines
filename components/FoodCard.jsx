import styles from "../styles/FoodCard.module.css";
import Image from "next/image";

const FoodCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/featured.jpg" alt="" width="500" height="500" />
        <h1 className={styles.title}>AFANG SOUP</h1>
        <span className={styles.price}>N2,000</span>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae nisi aut error, deserunt non?
        </p>
    </div>
  )
}

export default FoodCard