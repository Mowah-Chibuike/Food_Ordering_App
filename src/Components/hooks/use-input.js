import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [wasTouched, setWasTouched] = useState(false);

  const inputIsValid = validate(enteredValue);
  const inputHasError = !inputIsValid && wasTouched;

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const handleInputBlur = () => {
    setWasTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setWasTouched(false);
  };
  return {
    enteredValue,
    inputIsValid,
    inputHasError,
    handleInputChange,
    handleInputBlur,
    reset,
  };
};

export default useInput;
