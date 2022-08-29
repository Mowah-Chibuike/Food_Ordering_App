import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import GreenButton from "../../../UI/GreenButton/GreenButton";
import classes from "./CheckOutForm.module.css";

const CheckOutForm = () => {
  const cartCtx = useContext(CartContext);
  const { orderItems } = cartCtx;
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleFormSubmit}>
        <div className={classes.input_group}>
          <input type="number" placeholder="Card Number" />
        </div>
        <div className={classes.input_group}>
          <input type="month" placeholder="Expiry date" />
        </div>
        <div className={`${classes.input_group}`}>
          <input type="text" placeholder="CVV/CVV2" />
        </div>
        <div className={`${classes.input_group}`}>
          <input type="number" placeholder="Card Pin" />
        </div>
        <GreenButton
          item={{
            onClick: () => {
              orderItems();
            },
          }}
        >
          Make Payment
        </GreenButton>
      </form>
    </div>
  );
};

export default CheckOutForm;
