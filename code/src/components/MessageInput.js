import React, { useState } from "react";

import "./messageInput.css";

const MessageInput = ({ setMessages }) => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    // prevent page from refreshing automatically
    event.preventDefault();

    // post the current value of the text input to the server
    fetch(MESSAGES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // send the json as a string (object does not work here)
      body: JSON.stringify({ message }), // = ({ message: message })
    })
      .then((res) => res.json())
      .then((newMessage) => {
        // adding new message to start of messages array
        setMessages((previousMessages) => [newMessage, ...previousMessages]);
        setMessage("");
      });
  };

  return (
    <form className="message-input-container" onSubmit={handleSubmit}>
      <label className="input-heading">
        What's making you happy right&nbsp;now?
      </label>
      <textarea
        value={message}
        type="text"
        rows="3"
        onChange={(event) => setMessage(event.target.value)}
        className="form-text"
        placeholder="Give me at least 5 characters!"
      ></textarea>

      {/* characters left */}
      <p
        className={
          message.length > 140
            ? "max-characters characters-left"
            : "characters-left"
        }
      >
        {Math.abs(140 - message.length)} characters{" "}
        {message.length < 141 ? "left" : "too long"}
      </p>
      <button
        className="btn-thought"
        type="submit"
        value="happyThought"
        disabled={message.length < 6 || message.length > 140 ? true : false}
      >
        {" "}
        Send a happy thought!
      </button>
    </form>
  );
};

export default MessageInput;
