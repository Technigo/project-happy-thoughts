import React from "react";

import { API_URL } from "../reusable/urls";

export const SubmitButton = (props) => {
  const {
    setMessageList,
    setUserInput,
    userInput,
    setCharRange,
    charRange,
    setNewMessage,
    setKeypressCount
  } = props;

  const handleFormSubmit = (event) => {
    
    event.preventDefault();
    return isValidated()
      ? (fetchNewMessage())
      : alert("The message should be between 5 and 140 characters");
  };

  //checks if the characters are above 5 and under 140
  const isValidated = () => {
    if (charRange) {
      return true;
    }
    return false;
  };

  const clearAll = () => {
    setUserInput("")
    setCharRange(false)
    setKeypressCount("0")
  }

  const fetchNewMessage = () => {
    const post = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    };

    fetch(API_URL, post)
      .then((res) => res.json())
      .then((newMessage) => {
        setNewMessage(newMessage)
        setMessageList((previousMessages) => [newMessage, ...previousMessages]); 
        clearAll()
      })
      .catch((error) => console.log(error));
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
