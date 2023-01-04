import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.item}>
          <Image src="/img/bg.jpg" layout="fill" alt="" objectFit="cover" />
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>
              OH YES, WE MAKE THE MOST DELICIOUS MEALS IN THE BUJ
            </h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>OUR LOCATION</h1>
            <p className={styles.text}>
              No. 43 Parakou Crescent,
              <br /> Wuse II, Abuja
              <br /> 0818 234 2346
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
              MONDAY - FRIDAY 
              <br /> 9:00 - 22:00
            </p>
            <p className={styles.text}>
              SATURDAY - SUNDAY 
              <br /> 12:00 - 22:00
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WE ACCEPT</h1>
            <p className={styles.text}>
              MASTERCARD 
              <br />VISA
              <br /> VERVE
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.footer}>
          Copyright &copy; Taval Cuisiniere 2023
        </div>
      </div>
    </div>
  )
}

export default Footer