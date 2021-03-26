import React from "react";

export const SubmitButton = ({ fetchNewMessage, charRange }) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    return isValidated()
      ? fetchNewMessage()
      : alert("The message should be between 5 and 140 characters");
  };

  //checks if the characters are above 5 and under 140
  const isValidated = () => {
    if (charRange) {
      return true;
    }
    return false;
  };

  return (
    <button className="submit-btn" type="submit" onClick={handleFormSubmit}>
      <span role="img" aria-label="heart-emoji">
        &#10084;&#65039;
      </span>
      <p className="submit-btn__text">Send Happy Thought </p>
      <span role="img" aria-label="heart-emoji">
        &#10084;&#65039;
      </span>
    </button>
  );
};
