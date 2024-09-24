import styles from "../styles/FoodList.module.css"
import FoodCard from "./FoodCard"

const FoodList = ({ foodList }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>THE BEST <span className={styles.tav}>CUISINE</span> IN ABUJA</h1>
      <p className={styles.desc}>
        We offer you fresh delicious meals. Catered with skill & professionalism from Taval.
      </p>

        <div className={styles.wrapper}>
            <div className={styles.foodList}>
                {foodList.map((food) => (
                    <FoodCard food={food} key={food._id}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default FoodList