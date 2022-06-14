import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/manrope/manrope-regular.otf";
import "./fonts/recoleta/Recoleta-RegularDEMO.otf";
import "./fonts/santral/Santral-Regular.otf";
import Header from "./components/Header/Header";
import { Divider } from "@mui/material";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Header/Headers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Divider sx={{ py: 3 }} />
    <Title title='Contact us' fontSize='48px' button />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
