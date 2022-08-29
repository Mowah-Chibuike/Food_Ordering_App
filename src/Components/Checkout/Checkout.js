import React, { useContext } from "react";
import ModalContext from "../../store/modal-context";
import classes from "./Checkout.module.css";
import CheckOutForm from "./CheckOutForm/CheckOutForm";

const Checkout = () => {
  const modalCtx = useContext(ModalContext);
  const { handleModalContent } = modalCtx;

  const handleBackButton = () => {
    handleModalContent("cart");
  };
  return (
    <div className={classes.checkout}>
      <h3>Checkout</h3>
      <CheckOutForm />
      <p onClick={handleBackButton}>{"<<"} Go back</p>
    </div>
  );
};

export default Checkout;
