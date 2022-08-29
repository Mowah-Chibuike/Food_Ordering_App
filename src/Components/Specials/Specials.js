import React from "react";
import classes from "./Specials.module.css";
import SpecialsList from "./SpecialsList/SpecialsList";

const Specials = () => {
  return (
    <section className={classes.specials}>
      <h2 className={classes.title}>Special Meals of the day!</h2>
      <p className={classes.summary}>
        Check our sepecials of the day and get discounts on all our meals and
        swift delivery to what ever location within Ilorin.
      </p>
      <SpecialsList />
    </section>
  );
};

export default Specials;
