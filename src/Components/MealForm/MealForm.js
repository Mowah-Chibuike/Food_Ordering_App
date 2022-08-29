import React, { useState } from "react";
import classes from "./MealForm.module.css";
import GreenButton from "../../UI/GreenButton/GreenButton";

const MealForm = ({ getQuantity }) => {
  const [enteredValue, setEnteredValue] = useState(1);
  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
  };
  const increaseQuantity = () => {
    if (enteredValue < 10) {
      setEnteredValue((prev) => prev + 1);
    }
  };

  const reduceQuantity = () => {
    if (enteredValue > 1) {
      setEnteredValue((prev) => prev - 1);
    }
  };

  const addItemToCart = () => {
    getQuantity(enteredValue);
  };
  return (
    <div className={classes.meal_form}>
      <div className={classes.quantity_input}>
        <button onClick={increaseQuantity}>+</button>
        <input type="text" value={enteredValue} onChange={handleInputChange} />
        <button onClick={reduceQuantity}>-</button>
      </div>
      <GreenButton item={{ style: { width: "35%" }, onClick: addItemToCart }}>
        Add to Cart
      </GreenButton>
    </div>
  );
};

export default MealForm;
