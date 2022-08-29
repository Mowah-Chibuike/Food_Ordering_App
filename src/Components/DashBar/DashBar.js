import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faBookmark,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./DashBar.module.css";
import logo from "./assets/Group 12.png";
import ModalContext from "../../store/modal-context";
import CartContext from "../../store/cart-context";

const DashBar = () => {
  const ctx = useContext(ModalContext);
  const { showModal, modalContent, handleModalContent } = ctx;

  const cartCtx = useContext(CartContext);
  const { totalQuantity, orderedItems } = cartCtx;

  const handleCartVisibility = () => {
    handleModalContent("cart");
  };

  const handleOrdersVisibility = () => {
    handleModalContent("orders");
  };

  return (
    <div className={classes.navigation}>
      <NavLink to={"/"} className={classes.logo}>
        <span>
          <img src={logo} alt="" />
        </span>
        <h2>Lilies</h2>
      </NavLink>
      <ul>
        <li className={!showModal ? classes.active : undefined}>
          <div>
            <span className={classes.icon}>
              <FontAwesomeIcon icon={faHouse} className={classes.img} />
            </span>
            <span className={classes["nav-link"]}>Dashboard</span>
          </div>
        </li>
        <li>
          <div>
            <span className={classes.icon}>
              {" "}
              <FontAwesomeIcon icon={faUser} className={classes.img} />
            </span>
            <span className={classes["nav-link"]}>Your Profile</span>
          </div>
        </li>
        <li className={modalContent === "orders" ? classes.active : undefined}>
          <div onClick={handleOrdersVisibility}>
            <span className={classes.icon}>
              <FontAwesomeIcon icon={faCalendar} className={classes.img} />
            </span>
            <span className={classes["nav-link"]}>Orders</span>
            <span className={classes.orders_content}>
              {orderedItems.length}
            </span>
          </div>
        </li>
        <li className={modalContent === "cart" ? classes.active : undefined}>
          <div onClick={handleCartVisibility}>
            <span className={classes.icon}>
              <FontAwesomeIcon icon={faBookmark} className={classes.img} />
            </span>
            <span className={classes["nav-link"]}>Your Cart</span>
            <span className={classes.cart_content}>{totalQuantity}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DashBar;
