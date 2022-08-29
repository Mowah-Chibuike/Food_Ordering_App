import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = ({ id, quantity, title, image, price }) => {
  const totalPrice = quantity * price;
  const cartCtx = useContext(CartContext);
  const { removeItemFromCart } = cartCtx;

  const handleRemoveClick = () => {
    removeItemFromCart(id);
  };
  return (
    <div className={classes.cart_item}>
      <span className={classes.item}>
        <img src={image} alt="" />
        <div>
          <p>{title}</p>
          <p onClick={handleRemoveClick} className={classes.remove}>
            Remove
          </p>
        </div>
      </span>
      <span className={classes.qty}>{quantity}</span>
      <span className={classes.price}>N {price}</span>
      <span className={classes.total}>N {totalPrice}</span>
    </div>
  );
};

export default CartItem;
