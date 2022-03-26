import styles from "../../styles/Product.module.css"
import Image from "next/image"
import { useState } from "react"

const Product = () => {

    const [size, setSize] = useState(0)
    const food = {
        id: 1,
        img: "/img/featured4.jpg",
        name: "Chicken Fried Rice",
        price: [2000, 3500, 5000],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque porro atque voluptates!"
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={food.img} layout="fill" alt="" objectFit="contain" />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{food.name}</h1>
            <span className={styles.price}>N{food.price[size]}</span>
            <p className={styles.desc}>{food.desc}</p>
            <h3 className={styles.choose}>Choose your size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src="/img/plate.png" layout="fill" alt="" />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src="/img/plate.png" layout="fill" alt="" />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src="/img/plate.png" layout="fill" alt="" />
                    <span className={styles.number}>Large</span>
                </div>
            </div>

            <h3 className={styles.choose}>Extras</h3>
            <div className={styles.extras}>
                <div className={styles.option}>
                    <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox} />
                    <label htmlFor="spicy">Small Pepper</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="extra-spicy" name="extra-spicy" className={styles.checkbox} />
                    <label htmlFor="extra-spicy">Plenty Pepper</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="moi-moi" name="moi-moi" className={styles.checkbox} />
                    <label htmlFor="moi-moi">Moi-moi</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="coleslaw" name="coleslaw" className={styles.checkbox} />
                    <label htmlFor="coleslaw">Coleslaw</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>

    </div>
  )
}

export default Product