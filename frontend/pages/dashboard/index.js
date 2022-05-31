import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
// import Moralis from "moralis"
import { useMoralis } from "react-moralis"
import styles from '../../styles/Home.module.css'

function Index() {
  const { isAuthenticated, logout } = useMoralis()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) router.replace("/")
  }, [isAuthenticated])

  return (
    <div className={styles.m}>
      <Head>
        <title>Moralis Dasbhboard</title>
      </Head>
      <button
      className={styles.indbtn}
    >
      Send 0.1 ETH to owner
    </button>
    <button
      className={styles.lgbtn}
      onClick={logout}
    >
      Logout
    </button>
  </div>
);
}
export default Index;

