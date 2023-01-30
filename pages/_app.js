import { GloboalStyles } from "../styles/globals-style";
import "./_app.css";
export default function App({ Component, pageProps }) {
  return(
  <>
    <GloboalStyles/>
    <Component {...pageProps} />
  </>
  ) 
}

