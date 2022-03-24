import styles from "../styles/FoodList.module.css"
import FoodCard from "./FoodCard"

const FoodList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST HOME-COOKED MEALS IN ABUJA</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae incidunt nobis dolorem minima deserunt nostrum quia delectus qui omnis, veniam porro amet facere enim eveniet laborum doloribus et! Cupiditate, rerum!
      </p>
      <div className={styles.wrapper}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  )
}

export default FoodList