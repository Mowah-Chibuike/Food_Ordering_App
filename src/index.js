import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalContextProvider } from "./store/modal-context";
import { CartContextProvider } from "./store/cart-context";
import { AuthContextProvider } from "./store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ModalContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ModalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
