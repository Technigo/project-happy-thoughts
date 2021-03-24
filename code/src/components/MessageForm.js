import React, { useState } from "react";

import { SubmitButton } from "./SubmitButton";

export const MessageForm = ({ setMessageList }) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
      <form className="message-form">
        <input
          className="message-form__input"
          type="text"
          value={userInput}
          onChange={handleUserInput}
        ></input>
        <SubmitButton
          setMessageList={setMessageList}
          setUserInput={setUserInput}
          userInput={userInput}
        />
      </form>
  );
};
