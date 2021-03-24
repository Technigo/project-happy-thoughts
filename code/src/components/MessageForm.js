import React, { useState } from "react";

import { SubmitButton } from "./SubmitButton";

let keypress = 0;

export const MessageForm = ({ setMessageList }) => {
  const [isAboveCharLimit, setIsAboveCharLimit] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  //counts characters against the 140 max amount allowed in the input
  const handleCharInput = (e) => {
    console.log(e.keyCode);
    keypress > 140 ? setIsAboveCharLimit(true) : setIsAboveCharLimit(false);
    if (e.keyCode === 8) {
      return keypress === 0 ? keypress : keypress--;
    }
    return keypress++;
  };

  return (
    <form className="message-form">
      <h1 className="message-form__heading">
        What's making you happy right now?
      </h1>
      <textarea
        className="message-form__input"
        type="text"
        value={userInput}
        onChange={handleUserInput}
        onKeyDown={handleCharInput}
      ></textarea>
      {isAboveCharLimit ? (
        <p className="message-form__input-count count-warning">{keypress}/140</p>
      ) : (
        <p className="message-form__input-count">
          {keypress}/140
        </p>
      )}
      <SubmitButton
        setMessageList={setMessageList}
        setUserInput={setUserInput}
        userInput={userInput}
      />
    </form>
  );
};
