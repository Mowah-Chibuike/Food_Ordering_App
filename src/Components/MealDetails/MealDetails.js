import React, { useContext } from "react";
import classes from "./MealDetails.module.css";
import mealsArray from "../Meals/MealsList/MealsArray";
import MealForm from "../MealForm/MealForm";
import CartContext from "../../store/cart-context";

const MealDetails = ({ id }) => {
  const cartCtx = useContext(CartContext);
  const { addItemToCart } = cartCtx;
  const mealItemIndex = mealsArray.findIndex((item) => id === item.id);
  const mealItem = mealsArray[mealItemIndex];
  const { image, title, details, price, time } = mealItem;

  const addToCart = (quantity) => {
    addItemToCart({ ...mealItem, quantity: quantity });
  };

  return (
    <div className={classes.details_container}>
      <div className={classes["details-image"]}>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{details}</p>
      <div className={classes.extra_details}>
        <p>NGN {price}</p>
        <p>{time} Mins</p>
      </div>
      <MealForm getQuantity={addToCart} />
    </div>
  );
};

export default MealDetails;
