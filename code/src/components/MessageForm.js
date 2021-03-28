import React from "react";

import { SubmitButton } from "./SubmitButton";
import { TextInput } from "./TextInput";
import { CharacterCounter } from "./CharacterCounter";

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
    <form className="message-form" aria-labelledby="happy-thoughts">
      <h1 className="message-form__heading" id="happy-thoughts">
        What's making you happy right now?
      </h1>
      <TextInput
        userInput={userInput}
        setUserInput={setUserInput}
        setKeypressCount={setKeypressCount}
      />
      <CharacterCounter
        keypressCount={keypressCount}
        charRange={charRange}
        setCharRange={setCharRange}
      />
      <SubmitButton fetchNewMessage={fetchNewMessage} charRange={charRange} />
    </form>
  );
};
