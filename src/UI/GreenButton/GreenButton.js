import React from "react";
import classes from "./GreenButton.module.css";

const GreenButton = ({ item, children, className, type }) => {
  return (
    <button
      className={`${classes.green_button} ${classes[className]}`}
      type={type ? type : "button"}
      {...item}
    >
      {children}
    </button>
  );
};

export default GreenButton;
