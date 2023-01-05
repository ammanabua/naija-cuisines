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
                    About
                    </div>
                    <div className={styles.articleHead2}>
                        Taval
                        <br /> 
                        Cuisiniere
                    </div>
                    <div className={styles.articleText}>
                    <p className={styles.text} >
                        From a small place since 1998 dedicted to presenting exceptional food, regardless of whether it implies going the additional mile. We have a reputation of delivering excellence.
                        <br />
                        Our continental dishes are cooked fresh and to your requirements. Taval Cuisiniere offers the best food, curates exceptional events and deliver your meals with a personal touch. 
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