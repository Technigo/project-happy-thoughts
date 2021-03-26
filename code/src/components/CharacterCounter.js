import React, { useEffect, useCallback } from "react";

export const CharacterCounter = (props) => {
  const { charRange, setCharRange, keypressCount } = props;
  
  //charRange should become false if outside the range limit
  const counter = useCallback(() => {
    return keypressCount > 5 && keypressCount <= 140
      ? setCharRange(true)
      : setCharRange(false);
  }, [keypressCount, setCharRange]);

  //added callback/useEffect because a bad call when rendering and using states simultaniously in App.js and here
  useEffect(() => counter(), [counter]);

  return (
    <>
      {/*if characters is above 140 or under 5, the warning class is added which makes the counter-text red*/}
      {charRange ? (
        <div className="message-form__input-count">
          <p>{keypressCount}</p>
          <p>/140</p>
        </div>
      ) : (
        <div className="message-form__input-count">
          <p className="count-warning">{keypressCount}</p>
          <p>/140</p>
        </div>
      )}
    </>
  );
};
