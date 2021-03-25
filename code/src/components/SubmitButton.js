import React from "react";

import { API_URL } from "../reusable/urls";

export const SubmitButton = (props) => {
  const { setMessageList, userInput, setUserInput, setKeypress } = props;
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchNewMessage();
    setUserInput("");
    setKeypress(0);
  };

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
        setMessageList((previousMessages) => [newMessage, ...previousMessages]);
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
