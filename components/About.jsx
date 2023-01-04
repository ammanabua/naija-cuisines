import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <Image src="/img/abt.jpg" alt="" width="800" height="800" objectFit="fill" />
            </div>
            <div className={styles.right}>
                <article className={styles.article}>
                    <div className={styles.articleHead}>
                    About Us
                    </div>
                    <div className={styles.articleText}>
                    <p className={styles.text} >
                        At Taval Cuisiniere, we are dedicted to presenting exceptional food, regardless of where it implies going the additional mile.
                        <br />
                        Everything is cooked fresh and 
                        An indigenous and professional catering service that started, Taval Cuisinier offers the best food, curates exceptional events and deliver your meals with a personal. 
                        <br />
                    </p>

                    <Link href="/" passHref>
                        <button className={styles.btn}>Learn more...</button>
                    </Link>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default About