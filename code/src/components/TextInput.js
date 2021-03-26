import React from "react";

export const TextInput = (props) => {
  const {
    setUserInput,
    userInput,
    setKeypressCount
  } = props;

  // sets userInput to the text entered and get the length 
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    setKeypressCount(e.target.value.length);
  }

  return (
    <textarea
      className="message-form__input"
      value={userInput}
      onChange= {handleUserInput}
    ></textarea>
  );
};
