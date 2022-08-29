import React from "react";
import classes from "./SpecialItem.module.css";

const SpecialItem = ({ image, title, details }) => {
  return (
    <div className={classes["special-item"]}>
      <div className={classes["special-image"]}>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{details}</p>
    </div>
  );
};

export default SpecialItem;
