import React, { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (
    <SSRProvider>
      <ToastContainer autoClose={2000} />
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default App;
