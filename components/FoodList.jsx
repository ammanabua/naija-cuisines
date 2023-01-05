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
        {foodList.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </section>
  )
}

export default FoodList