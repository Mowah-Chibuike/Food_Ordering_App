import React from "react";
import classes from "./AddToCartBtn.module.css";

const AddToCartBtn = ({ item }) => {
  return (
    <button className={classes.button} {...item}>
      Add To Cart+
    </button>
  );
};

export default AddToCartBtn;
