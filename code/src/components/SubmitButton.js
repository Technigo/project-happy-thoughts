import React from "react";

import { API_URL } from "../reusable/urls";

export const SubmitButton = ({ setMessage, userInput, setUserInput }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchNewMessage();
    setUserInput("");
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
        setMessage((previousMessages) => [newMessage, ...previousMessages]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <button
      className="message-form__submit"
      type="submit"
      onClick={handleFormSubmit}
    >
      <span role="img" aria-label="heart-emoji">
        &#10084;&#65039;
      </span>
        Send Happy Thought
      <span role="img" aria-label="heart-emoji">
        &#10084;&#65039;
      </span>
    </button>
  );
};
