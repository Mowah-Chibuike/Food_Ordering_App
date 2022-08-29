import React, { useState, useReducer, useEffect } from "react";

const CartContext = React.createContext({
  items: [],
  orderedItems: [],
  totalQuantity: 0,
  totalAmount: 0,
  addItemToCart: () => {},
  orderItems: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalQuantity = state.totalQuantity + action.item.quantity;
    const updatedTotalAmount =
      state.totalAmount + action.item.quantity * action.item.price;
    const existingItemIndex = state.items.findIndex(
      (item) => action.item.id === item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    let updatedItem;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
      updatedItem.quantity = existingItem.quantity + action.item.quantity;
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalQuantity: updatedTotalQuantity,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => action.id === item.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalQuantity = state.totalQuantity - 1;
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    let updatedItem;

    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => action.id !== item.id);
    } else {
      updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalQuantity: updatedTotalQuantity,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return {
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
    };
  }

  return {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  };
};

export const CartContextProvider = ({ children }) => {
  const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  };

  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOrderedItems((prev) => {
        let unChangedState = [...prev];
        const updatedState = unChangedState.reduce((acc, item) => {
          const orderedItem = { ...item, status: "Delivered" };
          return acc.concat(orderedItem);
        }, []);

        return updatedState;
      });
    }, 10000);
  }, [orderedItems.length]);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const orderItems = () => {
    let cartItems = [...cartState.items];
    const orderedItems = cartItems.reduce((acc, item) => {
      const orderedItem = { ...item, status: "cooking" };
      return acc.concat(orderedItem);
    }, []);

    setOrderedItems((prev) => {
      return prev.concat(orderedItems);
    });

    dispatchCart({ type: "CLEAR" });
  };

  console.log("setup");

  return (
    <CartContext.Provider
      value={{
        ...cartState,
        addItemToCart,
        removeItemFromCart,
        orderedItems,
        orderItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
