import React from "react";
import classes from "./OrderItem.module.css";

const OrderItem = ({ quantity, title, image, price, status }) => {
  const totalPrice = quantity * price;
  return (
    <div className={classes.ordered_item}>
      <span className={classes.item}>
        <img src={image} alt="" />
        <div>
          <p>{title}</p>
        </div>
      </span>
      <span className={classes.qty}>{quantity}</span>
      <span className={classes.total}>N {totalPrice}</span>
      <span
        className={`${classes.status} ${
          status === "Delivered" && classes.delivered
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default OrderItem;
