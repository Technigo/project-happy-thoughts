import React, { useState } from "react";

import { SubmitButton } from "./SubmitButton";

export const MessageForm = ({ setMessageList }) => {
  const [isAboveCharLimit, setIsAboveCharLimit] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [keypress, setKeypress] = useState(0);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  //counts characters against the 140 max amount allowed in the input
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
          (e.keyCode > 218 && e.keyCode < 223))
      ) {
        //[\]'
        return true;
      } else {
        return false;
      }
    };

    //counter should change class (and therefore, text become red) over 140 chars
    keypress > 140 ? setIsAboveCharLimit(true) : setIsAboveCharLimit(false);

    if (e.keyCode === 8) {
      return keypress === 0 ? keypress : setKeypress(keypress - 1); //removes from counter if backspace is pressed
    } else if (validKeys()) {
      return setKeypress(keypress + 1);
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

      {/*if characters is above 140, the warning class is added which makes the counter-text red*/}
      {isAboveCharLimit ? (
        <p className="message-form__input-count count-warning">
          {keypress}/140
        </p>
      ) : (
        <p className="message-form__input-count">{keypress}/140</p>
      )}

      <SubmitButton
        setKeypress={setKeypress}
        setMessageList={setMessageList}
        setUserInput={setUserInput}
        userInput={userInput}
      />
    </form>
  );
};
