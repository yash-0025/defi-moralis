import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import { useEffect } from 'react'
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'






export default function Home() {

  const { isAuthenticated, authenticate } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if(isAuthenticated) router.replace("/dashboard");
  },[isAuthenticated]);

 
  return (
   <div className={styles.main}>
   <Head>
   <title>Testing Moralis</title>
   <meta name="description" content="A basic tutorial of Moralis IO"/>
   <link rel="icon" href="/favicon.ico" />
   </Head>
   <button className={styles.btn} onClick={() => authenticate({signingMessage: "You are authorizing the linking of your wallet."})}>
   Login using Metamask
   </button>

   </div>
  )
}
