import React, { useReducer } from "react";

const ModalContext = React.createContext({
  showModal: false,
  modalContent: null,
  mealId: "",
  handleModalContent: () => {},
  hideModalContent: () => {},
});

const modalStateReducer = (state, action) => {
  if (action.type === "cart") {
    return { showModal: true, modalContent: "cart", mealId: "" };
  }

  if (action.type === "meal_detail") {
    return {
      showModal: true,
      modalContent: "meal_detail",
      mealId: action.id,
    };
  }

  if (action.type === "checkout") {
    return { showModal: true, modalContent: "checkout", mealId: "" };
  }

  if (action.type === "orders") {
    return { showModal: true, modalContent: "orders", mealId: "" };
  }

  if (action.type === "hide") {
    return { showModal: false, modalContent: null, mealId: "" };
  }

  return { showModal: false, modalContent: null, mealId: "" };
};

export const ModalContextProvider = ({ children }) => {
  const intitialState = {
    showModal: false,
    modalContent: null,
    mealId: "",
  };
  const [modalState, dispatchModalState] = useReducer(
    modalStateReducer,
    intitialState
  );

  const { showModal, modalContent, mealId } = modalState;

  const handleModalContent = (content) => {
    dispatchModalState({ type: content });
  };

  const handleMealDetails = (content, id) => {
    dispatchModalState({ type: content, id: id });
  };

  const hideModalContent = () => {
    dispatchModalState({ type: "hide" });
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        modalContent,
        mealId,
        handleModalContent,
        handleMealDetails,
        hideModalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
