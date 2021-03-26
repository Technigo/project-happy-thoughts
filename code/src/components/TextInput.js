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

    //counts characters when text is pasted
    const onPaste = (content) => {
      setKeypressCount(content.target.value.length);
    };
    
    onPaste(e);

    //charRange should become false if outside the range limit
    keypressCount > 5 && keypressCount <= 140
      ? setCharRange(true)
      : setCharRange(false);
  };

  const handleKeyInput = (e) => {
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

    if (e.keyCode === 8) {
      return keypressCount === 0
        ? keypressCount
        : setKeypressCount(keypressCount - 1); //removes from counter if backspace is pressed
    } else if (validKeys()) {
      return setKeypressCount(keypressCount + 1);
    }
  };

  return (
    <textarea
      className="message-form__input"
      value={userInput}
      onKeyDown={handleKeyInput}
      onChange={handleUserInput}
    ></textarea>
  );
};
