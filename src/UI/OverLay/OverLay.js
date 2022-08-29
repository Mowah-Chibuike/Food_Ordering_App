import React from "react";
import ReactDOM from "react-dom";
import classes from "./OverLay.module.css";

const Modal = ({ children, onClick }) => {
  return (
    <div className={classes.backdrop}>
      <div onClick={onClick} className={classes.cancel}></div>
      <div className={classes.overlay}>{children}</div>
    </div>
  );
};

const OverLay = ({ children, onClick }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal onClick={onClick}>{children}</Modal>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default OverLay;
