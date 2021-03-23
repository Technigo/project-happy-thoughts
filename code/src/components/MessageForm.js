import React, { useState } from "react";

import { SubmitButton } from "./SubmitButton";

export const MessageForm = ({ setMessage }) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
      <form className="message-form">
          <div className="message-form__container">
        <input
          className="message-form__input"
          type="text"
          value={userInput}
          onChange={handleUserInput}
        ></input>
        <SubmitButton
          setMessage={setMessage}
          setUserInput={setUserInput}
          userInput={userInput}
        />
        </div>
      </form>
  );
};
