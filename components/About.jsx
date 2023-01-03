import Image from 'next/image'
import React from 'react'
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <Image src="/img/featured1.jpg" alt="" layout='fill' objectFit="contain" />
            </div>
            <div className={styles.right}>
                <article className={styles.header}>
                    About Taval Cuisinier

                    <p className={styles.text} >
                        At Taval Cuisiniere, we are dedicted to presenting exceptional food, regardless of where it implies going the additional mile.
                        <br />
                        Everything is cooked fresh and 
                        An indigenous and professional catering service that started, Taval Cuisinier offers the best food, curates exceptional events and deliver your meals with a personal. 
                        <br />
                    </p>
                </article>
            </div>
        </div>
    </section>
  )
}

export default About