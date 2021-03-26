import React from "react";

import { SubmitButton } from "./SubmitButton";
import { TextInput } from "./TextInput";
import { DisplayCharCounter } from "./DisplayCharCounter";

export const MessageForm = (props) => {
  const {
    fetchNewMessage,
    charRange,
    setCharRange,
    userInput,
    setUserInput,
    keypressCount,
    setKeypressCount,
  } = props;

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
      <DisplayCharCounter keypressCount={keypressCount} charRange={charRange} />
      <SubmitButton fetchNewMessage={fetchNewMessage} charRange={charRange} />
    </form>
  );
};
