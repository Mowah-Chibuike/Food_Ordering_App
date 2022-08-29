import React from "react";
import classes from "./Hero.module.css";
import heroImage from "../../assets/hero_image.png";
import GooglePlayBtn from "../../UI/GooglePlayBtn/GooglePlayBtn";
import AppStoreBtn from "../../UI/AppStoreBtn/AppStoreBtn";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes["hero-text"]}>
        <h1>
          Order <span className={classes["colored-span"]}>Food</span> anytime,
          anywhere
        </h1>
        <p>
          Browse from our list of specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!
        </p>
        <div className={classes.badges}>
          <GooglePlayBtn />
          <AppStoreBtn />
        </div>
      </div>
      <div className={classes["hero-image"]}>
        <div className={classes.image}>
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
