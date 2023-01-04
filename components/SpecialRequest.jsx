import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "../styles/SpecialRequest.module.css"

const SpecialRequest = () => {
  return (
    <section className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                
            </div>
            <div className={styles.right}>
                <article className={styles.article}>
                    <div className={styles.articleHead}>
                    Special Orders
                    </div>
                    <div className={styles.articleText}>
                    <p className={styles.text} >
                        Do you have special dietary requirements? Tell us how you want your meal cooked, and with what.
                        <br />
                    </p>

                    <Link href="/" passHref>
                        <button className={styles.btn}>Custom Order</button>
                    </Link>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default SpecialRequest;