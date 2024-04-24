import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import "swiper/css/bundle";
import "../styles/verticalSwiper.css"

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
