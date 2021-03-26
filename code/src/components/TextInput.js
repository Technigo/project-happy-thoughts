import React from "react";

export const TextInput = (props) => {
  const {
    setUserInput,
    userInput,
    setCharRange,
    keypressCount,
    setKeypressCount,
  } = props;

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    onPaste(e);

    //charRange should become false if outside the range limit
    keypressCount > 5 && keypressCount <= 140
      ? setCharRange(true)
      : setCharRange(false);
  };

  //counts characters when text is pasted
  const onPaste = (content) => {
    setKeypressCount(content.target.value.length);
  };

  return (
    <textarea
      className="message-form__input"
      value={userInput}
      onChange={handleUserInput}
    ></textarea>
  );
};
