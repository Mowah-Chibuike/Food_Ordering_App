import React from "react";
import classes from "./Home.module.css";
import Hero from "../../Components/Hero/Hero";
import NavBar from "../../Components/NavBar/NavBar";
import Specials from "../../Components/Specials/Specials";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <main className={classes.main}>
        <NavBar />
        <Hero />
        <Specials />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
