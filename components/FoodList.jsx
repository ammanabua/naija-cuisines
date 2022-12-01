import styles from "../styles/FoodList.module.css"
import FoodCard from "./FoodCard"

const FoodList = ({ foodList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST <span className={styles.tav}>HOME-COOKED</span> MEALS IN ABUJA</h1>
      <p className={styles.desc}>
        We offer fresh delicious meals for you and your family. Catered with love and professionalism from Taval. Order your meals and keep coming back for more!
      </p>
      <div className={styles.wrapper}>
        {foodList.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  )
}

export default FoodList