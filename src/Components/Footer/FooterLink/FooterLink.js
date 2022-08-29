import React from "react";
import classes from "./FooterLink.module.css";

const FooterLink = ({ children }) => {
  return <p className={classes["footer-link"]}>{children}</p>;
};

export default FooterLink;
