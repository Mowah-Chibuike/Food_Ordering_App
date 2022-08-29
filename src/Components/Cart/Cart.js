import React, { useContext } from "react";
import classes from "./Cart.module.css";
import GreenButton from "../../UI/GreenButton/GreenButton";
import CartContext from "../../store/cart-context";
import CartList from "../CartList/CartList";
import ModalContext from "../../store/modal-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const { items, totalAmount } = cartCtx;
  const modalCtx = useContext(ModalContext);
  const { handleModalContent } = modalCtx;

  const checkOutButtonHandler = () => {
    handleModalContent("checkout");
  };

  return (
    <div className={classes.cart}>
      <h3>Your Cart</h3>
      <div className={classes.header}>
        <span className={classes.items}>Items</span>
        <span className={classes.qty}>qty</span>
        <span className={classes.unit}>unit</span>
        <span className={classes.total}>Total</span>
      </div>
      <CartList />
      <div className={classes.main_total}>
        <h3>Total: N{totalAmount}</h3>
      </div>
      <div className={classes.actions}>
        <GreenButton
          className={items.length < 1 && "disabled"}
          item={{ onClick: checkOutButtonHandler, disabled: items.length < 1 }}
        >
          Checkout
        </GreenButton>
      </div>
    </div>
  );
};

export default Cart;
