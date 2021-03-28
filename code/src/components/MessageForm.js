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
    <section className="send-message">
    <form className="send-message-form">
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
    </section>
  );
};
