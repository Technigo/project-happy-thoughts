import React from "react";

export const DisplayCharCounter = ({ charRange, keypressCount }) => {
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
