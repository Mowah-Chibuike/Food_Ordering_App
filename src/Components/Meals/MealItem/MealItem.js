import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import AddToCartBtn from "../../../UI/AddToCartBtn/AddToCartBtn";
import ModalContext from "../../../store/modal-context";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, image, title, summary, price }) => {
  const ctx = useContext(ModalContext);
  const { handleMealDetails } = ctx;

  const cartCtx = useContext(CartContext);
  const { items, addItemToCart } = cartCtx;

  const checkDetails = () => {
    handleMealDetails("meal_detail", id);
  };

  const handleCartButton = () => {
    console.log(items);
    addItemToCart({ id, image, title, summary, price, quantity: 1 });
  };

  return (
    <div className={classes["meal-item"]}>
      <div className={classes["meal-image"]}>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <div className={classes.actions}>
        <p>N {price}</p>
        <AddToCartBtn item={{ onClick: handleCartButton }} />
      </div>
      <p onClick={checkDetails} className={classes.details}>
        See details
      </p>
    </div>
  );
};

export default MealItem;
