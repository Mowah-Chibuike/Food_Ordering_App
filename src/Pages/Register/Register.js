import React from "react";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <section className={classes.register}>
      <div className={classes.image}></div>
      <div className={classes.form}>
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;
