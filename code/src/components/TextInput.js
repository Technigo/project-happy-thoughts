import React from "react";

export const TextInput = (props) => {
  const { setUserInput, userInput, setKeypressCount } = props;

  // sets userInput to the text entered and get the length
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    setKeypressCount(e.target.value.length);
  };

  return (
    <>
      <label for="user-input">
        <h1 className="send-message-form__heading">
          What's making you happy right now?
        </h1>
      </label>
      <textarea
        className="send-message-form__input"
        id="user-input"
        value={userInput}
        onChange={handleUserInput}
      ></textarea>
    </>
  );
};
