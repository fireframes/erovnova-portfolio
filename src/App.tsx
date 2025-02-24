// import { useState } from "react";
import "./styles.css";
import "@fontsource/montserrat";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Analytics from "@vercel/analytics";
import { useEffect } from "react";

function App() {
  useEffect(() => Analytics.inject());
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
