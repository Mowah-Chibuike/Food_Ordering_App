import React from "react";
import classes from "./MealsList.module.css";
import mealsArray from "./MealsArray";
import MealItem from "../MealItem/MealItem";

const MealsList = () => {
  return (
    <div className={classes.meals_list}>
      {mealsArray.map((item) => {
        const { id, image, title, summary, price } = item;
        return (
          <MealItem
            key={id}
            id={id}
            image={image}
            title={title}
            summary={summary}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default MealsList;
