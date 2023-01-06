import styles from "../styles/FoodCard.module.css";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  return (
    <div className={styles.container}>
        <Link href={`/product/${food._id}`} passHref>
          <Image className={styles.img} src={food.img} alt="" width="500" height="500" />
        </Link>
        <Link href={`/product/${food._id}`} passHref>
          <div className={styles.cardHead}>
            <h1 className={styles.title}>{food.title}</h1>
            <span className={styles.price}>&#8358;{food.prices[0]}</span>
          </div>
        </Link>
        <p className={styles.desc}>
            {food.desc}
        </p>
        <Link href={`/product/${food._id}`} passHref>
          <button className={styles.btn}>Order</button>
        </Link>
    </div>
  )
}

export default FoodCard