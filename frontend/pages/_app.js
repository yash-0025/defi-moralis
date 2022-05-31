import { MoralisProvider } from "react-moralis";
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  const NEXT_APP_ID = "kVJWy7vwDPnjZXAzDDZXnxAezvSyo2jtccCi2UKE";
  const NEXT_SERVER_URL = "https://hum3lfprex6e.usemoralis.com:2053/server";
  return (
    <MoralisProvider 
    appId={NEXT_APP_ID}
    serverUrl={NEXT_SERVER_URL}
    >
   <Component {...pageProps} />
   </MoralisProvider>
  )
}

export default MyApp
