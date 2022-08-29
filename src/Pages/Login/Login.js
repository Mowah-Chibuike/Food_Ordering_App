import React from "react";
import classes from "./Login.module.css";
import LoginForm from "../../Components/LoginForm/LoginForm";

const Login = () => {
  return (
    <section className={classes.register}>
      <div className={classes.image}></div>
      <div className={classes.form}>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
