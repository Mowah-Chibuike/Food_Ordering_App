import React from "react";
import DashBar from "../DashBar/DashBar";
import { Outlet } from "react-router-dom";
import classes from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <section className={classes.shared_layout}>
      <DashBar />
      <Outlet />
    </section>
  );
};

export default SharedLayout;
