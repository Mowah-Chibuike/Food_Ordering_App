import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <section className={classes.newsletter}>
      <div className={classes.text}>
        <h2>Get notified when we update!</h2>
        <p>
          Get notified when we add new items to our specials menu, update our
          price list of have promos!
        </p>
      </div>
      <div className={classes.input_group}>
        <input type="text" />
        <Button>Get notified</Button>
      </div>
    </section>
  );
};

export default NewsLetter;
