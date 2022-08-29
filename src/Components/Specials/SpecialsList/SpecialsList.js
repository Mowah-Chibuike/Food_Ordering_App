import React from "react";
import classes from "./SpecialsList.module.css";
import specialsArray from "./SpecialsArray";
import SpecialItem from "../SpecialItem/SpecialItem";

const SpecialsList = () => {
  return (
    <div className={classes.specials_list}>
      {specialsArray.map((item) => {
        const { id, image, title, details } = item;
        return (
          <SpecialItem key={id} image={image} title={title} details={details} />
        );
      })}
    </div>
  );
};

export default SpecialsList;
