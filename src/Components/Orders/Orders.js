import React from "react";
import classes from "./Orders.module.css";
import OrdersList from "./OrdersList/OrdersList";

const Orders = () => {
  return (
    <div className={classes.orders}>
      <h3>Your Orders</h3>
      <div className={classes.header}>
        <span className={classes.items}>Items</span>
        <span className={classes.qty}>qty</span>
        <span className={classes.total}>Total</span>
        <span className={classes.status}>status</span>
      </div>
      <OrdersList />
    </div>
  );
};

export default Orders;
