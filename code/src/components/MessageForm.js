import React, { useState } from "react";

import { SubmitButton } from "./SubmitButton";
import { TextInput } from "./TextInput";
import { DisplayCharCounter } from "./DisplayCharCounter";


export const MessageForm = ({ setMessageList, setNewMessage }) => {
  const [charRange, setCharRange] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [keypressCount, setKeypressCount] = useState(0);

  return (
    <form className="message-form">
      <h1 className="message-form__heading">
        What's making you happy right now?
      </h1>
      <TextInput
        setCharRange={setCharRange}
        userInput={userInput}
        setUserInput={setUserInput}
        keypressCount={keypressCount}
        setKeypressCount={setKeypressCount}
      />
      <DisplayCharCounter 
        keypressCount={keypressCount}
        charRange={charRange}
      />
      <SubmitButton
        setMessageList={setMessageList}
        setCharRange={setCharRange}
        charRange={charRange}
        setUserInput={setUserInput}
        userInput={userInput}
        setNewMessage = {setNewMessage}
        setKeypressCount = {setKeypressCount}
      />
        
    </form>
  );
};
