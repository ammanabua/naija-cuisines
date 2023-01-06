import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/phone.png" alt="" width="30" height="30" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>0818 234 2346</div>

        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/menu" passHref>
            <li className={styles.listItem}>About</li>
          </Link>
          <Link href="/menu" passHref>
            <li className={styles.listItem}>Menu</li>
          </Link>
          
          <Image src="/img/taval-logo.png" alt="" width="60" height="60" className={styles.logo} />
          <Link href='/services' passHref>
            <li className={styles.listItem}>Services</li>
          </Link>
          <Link href='/contact' passHref>
            <li className={styles.listItem}>Contact</li>
          </Link>
          <Link href='/blog' passHref>
            <li className={styles.listItem}>Stories</li>
          </Link>
          
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.wrapper}>
          <Link href="/user" passHref>
            <div className={styles.user}>
              <Image src="/img/user1.png" alt="" width="20" height="20" />
            </div>
          </Link>
          <Link href="/cart" passHref>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="25" height="25" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
