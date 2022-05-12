import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import Featured from '../components/Featured'
import FoodList from '../components/FoodList'
import styles from '../styles/Home.module.css'


export default function Home({ foodList, admin }) {

  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Taval Cuisiniére</title>
        <meta name="description" content="Best home-made meals in Abuja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <FoodList foodList={foodList} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN){
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      foodList: res.data,
      admin
    }
  }
}
