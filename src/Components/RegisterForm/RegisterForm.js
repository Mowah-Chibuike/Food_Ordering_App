import React, { useState } from "react";
import classes from "./RegisterForm.module.css";
import GreenButton from "../../UI/GreenButton/GreenButton";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";
import Message from "../../UI/Message/Message";

const RegisterForm = () => {
  const [show, setShow] = useState(false);

  const showPassword = () => {
    setShow((prev) => !prev);
  };

  const navigate = useNavigate();

  const [errorState, setErrorState] = useState({
    msgDisplay: false,
    hasError: false,
  });
  const {
    enteredValue: firstNameValue,
    inputIsValid: firstNameIsValid,
    inputHasError: firstNamehasError,
    handleInputChange: handleFirstNameChange,
    handleInputBlur: handleFirstNameBlur,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: emailValue,
    inputIsValid: EmailIsValid,
    inputHasError: EmailhasError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));

  const {
    enteredValue: passwordValue,
    inputIsValid: PasswordIsValid,
    inputHasError: PasswordhasError,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    reset: resetPassword,
  } = useInput((value) => value.trim().length > 7);

  const displayMessage = () => {
    setErrorState((prev) => {
      return { ...prev, msgDisplay: true };
    });
    setTimeout(() => {
      setErrorState((prev) => {
        return { ...prev, msgDisplay: false };
      });
    }, 1500);
  };

  let formIsValid = firstNameIsValid && EmailIsValid && PasswordIsValid;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      const userData = {
        firstName: firstNameValue,
        email: emailValue,
        password: passwordValue,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setErrorState((prev) => {
        return { ...prev, hasError: false };
      });
      displayMessage();
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }

    resetFirstName();
    resetEmail();
    resetPassword();
  };

  let message = "Registration successful";
  if (errorState.hasError) {
    message = "Registration failed";
  }

  return (
    <>
      {errorState.msgDisplay && (
        <Message
          style={{ color: `${errorState.hasError ? "red" : "green"}` }}
          message={message}
        />
      )}
      <div className={classes.form}>
        <h3>Welcome to Lilies</h3>
        <form onSubmit={handleFormSubmit}>
          <div className={classes.input_group}>
            <input
              type="text"
              placeholder="Your Firstname"
              value={firstNameValue}
              onChange={handleFirstNameChange}
              onBlur={handleFirstNameBlur}
            />
            {firstNamehasError && <p>Please fill this field correctly</p>}
          </div>
          <div className={classes.input_group}>
            <input
              type="email"
              placeholder="Your Email address"
              value={emailValue}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            {EmailhasError && <p>Please enter a valid email address</p>}
          </div>
          <div className={`${classes.input_group}`}>
            <input
              type={show ? "text" : "password"}
              placeholder="Your Password"
              value={passwordValue}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            <button
              type="button"
              className={classes.show_text}
              onClick={showPassword}
            >
              show
            </button>
            {PasswordhasError && (
              <p>Password length must be greater than 7 characters</p>
            )}
          </div>
          <GreenButton
            className={!formIsValid && "disabled"}
            type="submit"
            item={{ disabled: !formIsValid }}
          >
            SIGN UP
          </GreenButton>
          <div className={classes.links}>
            <p className={classes.login_link}>
              Already have an account?
              <Link to={"/login"} className={classes.link}>
                LOGIN
              </Link>
            </p>
            <Link to={"/"} className={classes.link}>
              Go Home
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
