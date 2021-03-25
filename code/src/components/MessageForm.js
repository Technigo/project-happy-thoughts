import React, { useState } from "react";

import { SubmitButton } from "./SubmitButton";

export const MessageForm = ({ setMessageList }) => {
  const [isOutsideCharRange, setIsOutsideCharRange] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [keypressCount, setKeypressCount] = useState(0);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleCharInput = (e) => {
    //checks if keys should be counted as a character towards character limit
    const validKeys = () => {
      if (
        e.ctrlKey === false && //shouldn't count if ctrl key is pressed
        (e.keyCode === 32 || // spacebar
          (e.keyCode > 47 && e.keyCode < 58) || // number keys
          (e.keyCode > 64 && e.keyCode < 91) || // letter keys
          (e.keyCode > 95 && e.keyCode < 112) || // numpad keys
          (e.keyCode > 185 && e.keyCode < 193) || // ;=,-./`
          (e.keyCode > 218 && e.keyCode < 223)) //[\]'
      ) {
        return true;
      } else {
        return false;
      }
    };

    //counter should change class (and therefore, text become red) under 5 or over 140 chars
    keypressCount < 5 || keypressCount > 140
      ? setIsOutsideCharRange(true)
      : setIsOutsideCharRange(false);

    if (e.keyCode === 8) {
      return keypressCount === 0
        ? keypressCount
        : setKeypressCount(keypressCount - 1); //removes from counter if backspace is pressed
    } else if (validKeys()) {
      return setKeypressCount(keypressCount + 1);
    }
  };

  return (
    <form className="message-form">
      <h1 className="message-form__heading">
        What's making you happy right now?
      </h1>
      <textarea
        className="message-form__input"
        value={userInput}
        onChange={handleUserInput}
        onKeyDown={handleCharInput}
      ></textarea>

      {/*if characters is above 140 or under 5, the warning class is added which makes the counter-text red*/}
      {isOutsideCharRange ? (
        <p className="message-form__input-count count-warning">
          {keypressCount}/140
        </p>
      ) : (
        <p className="message-form__input-count">
          {keypressCount}/140
        </p>
      )}

      <SubmitButton
        setKeypressCount={setKeypressCount}
        isOutsideCharRange={isOutsideCharRange}
        setMessageList={setMessageList}
        setUserInput={setUserInput}
        userInput={userInput}
      />
    </form>
  );
};
