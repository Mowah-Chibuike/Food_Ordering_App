import React, { useContext, useEffect, useState } from "react";
import classes from "./Dashboard.module.css";
import MealsList from "../../Components/Meals/MealsList/MealsList";
import OverLay from "../../UI/OverLay/OverLay";
import ModalContext from "../../store/modal-context";
import Cart from "../../Components/Cart/Cart";
import Orders from "../../Components/Orders/Orders";
import MealDetails from "../../Components/MealDetails/MealDetails";
import Checkout from "../../Components/Checkout/Checkout";

const Dashboard = () => {
  const ctx = useContext(ModalContext);
  const { showModal, modalContent, mealId, hideModalContent } = ctx;

  const [user, setUser] = useState("");
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    const { firstName } = userData;
    setUser(firstName);
  }, []);

  let content;
  if (modalContent === "cart") {
    content = <Cart />;
  }

  if (modalContent === "orders") {
    content = <Orders />;
  }

  if (modalContent === "meal_detail") {
    content = <MealDetails id={mealId} />;
  }

  if (modalContent === "checkout") {
    content = <Checkout />;
  }
  return (
    <main className={classes.Dashboard}>
      <h3>
        Good morning, <span>{user}</span>!
      </h3>
      <p>What delicious meal are you craving today?</p>
      <MealsList />
      {showModal && (
        <OverLay
          onClick={() => {
            hideModalContent();
          }}
        >
          {content}
        </OverLay>
      )}
    </main>
  );
};

export default Dashboard;
