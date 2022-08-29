import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import GreenButton from "../../UI/GreenButton/GreenButton";
import Message from "../../UI/Message/Message";
import useInput from "../hooks/use-input";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const ctx = useContext(AuthContext);
  const { onLogin } = ctx;
  const [userData, setUserData] = useState({});
  const [errorState, setErrorState] = useState({
    msgDisplay: false,
    hasError: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleShowButton = () => {
    setShowPassword((prev) => !prev);
  };
  const navigate = useNavigate();

  const {
    enteredValue: enteredEmail,
    inputIsValid: EmailIsValid,
    inputHasError: EmailHasError,
    handleInputChange: handleEmailChanged,
    handleInputBlur: handleEmailBlurred,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const {
    enteredValue: enteredPassword,
    inputHasError: PasswordHasError,
    inputIsValid: PasswordIsValid,
    handleInputChange: handlePasswordChanged,
    handleInputBlur: handlePasswordBlurred,
    reset: resetPasswordInput,
  } = useInput((value) => value.length > 0);
  let formIsValid = false;

  if (EmailIsValid && PasswordIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUserData(userData);
  }, []);

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      if (
        userData?.email === enteredEmail &&
        userData?.password === enteredPassword
      ) {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("user", JSON.stringify(userData));
        onLogin();
        displayMessage();
        navigate("/dashboard");
        resetEmailInput();
        resetPasswordInput();
        return;
      }
      setErrorState((prev) => {
        return { ...prev, hasError: true };
      });
      displayMessage();
      resetEmailInput();
      resetPasswordInput();
    }
  };

  let message = "Authentication successful";
  if (errorState.hasError) {
    message = "Invalid Email or Password";
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
        <h3>Welcome Back!</h3>
        <form onSubmit={handleFormSubmit}>
          <div className={classes.input_group}>
            <input
              type="text"
              placeholder="Your Email address"
              value={enteredEmail}
              onChange={handleEmailChanged}
              onBlur={handleEmailBlurred}
            />
            {EmailHasError && <p>Please enter a valid email address</p>}
          </div>
          <div className={`${classes.input_group}`}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              value={enteredPassword}
              onChange={handlePasswordChanged}
              onBlur={handlePasswordBlurred}
            />
            <button
              type="button"
              className={classes.show_text}
              onClick={handleShowButton}
            >
              show
            </button>
            {PasswordHasError && <p>Please enter your password</p>}
          </div>
          <GreenButton
            type="submit"
            className={!formIsValid && "disabled"}
            item={{
              disabled: !formIsValid,
            }}
          >
            SIGN IN
          </GreenButton>
          <div className={classes.links}>
            <Link to={"/register"} className={classes.link}>
              Create an account
            </Link>
            <Link to={"/"} className={classes.link}>
              Return to Home page
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
