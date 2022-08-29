import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import ModalContext from "../../store/modal-context";
import GreenButton from "../../UI/GreenButton/GreenButton";
import CartItem from "../Cart/CartItem/CartItem";
import classes from "./CartList.module.css";

const CartList = () => {
  const modalCtx = useContext(ModalContext);
  const { hideModalContent } = modalCtx;
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  let content = (
    <div className={classes.addButton}>
      <GreenButton
        item={{
          style: { width: "50%" },
          onClick: () => {
            hideModalContent();
          },
        }}
      >
        Add Meals
      </GreenButton>
    </div>
  );
  if (items.length > 0) {
    content = items.map((item) => {
      const { id, quantity, title, image, price } = item;
      return (
        <CartItem
          key={id}
          id={id}
          quantity={quantity}
          title={title}
          image={image}
          price={price}
        />
      );
    });
  }

  return <div className={classes.cart_container}>{content}</div>;
};

export default CartList;
