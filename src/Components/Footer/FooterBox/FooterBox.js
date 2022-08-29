import React from "react";
import classes from "./FooterBox.module.css";
import FooterLink from "../FooterLink/FooterLink";

const FooterBox = ({ items, children }) => {
  const { header, links } = items;

  if (!links) {
    return (
      <div className={classes.footer_box}>
        <h4>{header}</h4>
        {children}
      </div>
    );
  }

  return (
    <div className={classes.footer_box}>
      <h4>{header}</h4>
      {links.map((link, i) => {
        return <FooterLink key={i}>{link}</FooterLink>;
      })}
    </div>
  );
};

export default FooterBox;
