import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import "./fonts/recoleta/Recoleta-Bold.ttf";
// import "./fonts/recoleta/Recoleta-Regular.ttf";
// import "./fonts/santral/Santral-Bold.otf";
// import "./fonts/santral/Santral-Book.otf";
import Header from "./components/Header/Header";
import { Divider } from "@mui/material";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Header/Headers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ history }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <Headers />
      <ScrollToTop />
      <App />
      <Footer />{" "}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
