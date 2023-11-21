import React, { useState } from "react";

const NumericInput = ({ maxDigits, placeHolder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const numericValue = inputText.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    // Limit the number of digits
    const limitedNumericValue = numericValue.slice(0, maxDigits);

    setInputValue(limitedNumericValue);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeHolder}
    />
  );
};

export default NumericInput;
