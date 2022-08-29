import React, { useContext, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/Group 12.png";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

const NavBar = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const handleHamburgerClick = () => {
    setDisplayNav((prev) => !prev);
  };

  const authCtx = useContext(AuthContext);
  const { isLoggedIn, onLogout } = authCtx;
  return (
    <div className={"head"}>
      <div className={"header"}>
        <div className={"logo"}>
          <span>
            <img src={logo} alt="" />
          </span>
          <h2>Lilies</h2>
        </div>
        <div
          className={` ${displayNav ? "hamburger active" : "hamburger"}`}
          onClick={handleHamburgerClick}
        ></div>
        <div className={` ${displayNav ? "navigation show" : "navigation"}`}>
          <ul className={"headerEl"}>
            <li>
              <div className={"link"} onClick={handleHamburgerClick}>
                <NavLink
                  to={"/"}
                  className={"main-link"}
                  isActiveClassName={"active"}
                >
                  Home
                </NavLink>
              </div>
            </li>

            {!isLoggedIn && (
              <li>
                <div className={"link"} onClick={handleHamburgerClick}>
                  <NavLink
                    to={"/login"}
                    className={"main-link"}
                    isActiveClassName={"active"}
                  >
                    Login
                  </NavLink>
                </div>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <div className={"link"} onClick={handleHamburgerClick}>
                  <NavLink
                    to={"/dashboard"}
                    className={"main-link"}
                    isActiveClassName={"active"}
                  >
                    Dashboard
                  </NavLink>
                </div>
              </li>
            )}

            {!isLoggedIn && (
              <li>
                <div className={"button"} onClick={handleHamburgerClick}>
                  <NavLink
                    to={"/register"}
                    className={"button-text"}
                    isActiveClassName={"active"}
                  >
                    Sign Up
                  </NavLink>
                </div>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <div className={"button"} onClick={handleHamburgerClick}>
                  <button
                    onClick={() => {
                      onLogout();
                    }}
                    className={"button-text"}
                  >
                    Log out
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
