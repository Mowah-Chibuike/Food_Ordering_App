import React, { useContext } from "react";
import classes from "./OrdersList.module.css";
import OrderItem from "../OrderItem/OrderItem";
import CartContext from "../../../store/cart-context";

const OrdersList = () => {
  const cartCtx = useContext(CartContext);
  const { orderedItems } = cartCtx;

  let content = (
    <div className={classes.not_found}>
      <p>You haven't ordered yet</p>
    </div>
  );
  if (orderedItems.length > 0) {
    content = orderedItems.map((item, i) => {
      const { id, quantity, title, image, price, status } = item;
      return (
        <OrderItem
          key={id + Math.random()}
          id={id}
          quantity={quantity}
          title={title}
          image={image}
          price={price}
          status={status}
        />
      );
    });
  }

  return <div className={classes.orders_container}>{content}</div>;
};

export default OrdersList;
