import React, { useState } from "react";

import "./messageInput.css";

const MessageInput = ({ setMessages }) => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    // Prevent page from refreshing automatically
    event.preventDefault();

    // Post the current value of the text input to the server
    fetch(MESSAGES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send the JSON as a string -- object does not work here
      body: JSON.stringify({ message }), // = ({ message: message })
    })
      .then((res) => res.json())
      .then((newMessage) => {
        // Adding new message to start of messages array
        console.log(newMessage);
        setMessages((previousMessages) => [newMessage, ...previousMessages]);
        setMessage("");
      });
  };

  return (
    <form className="message-input-container" onSubmit={handleSubmit}>
      <label className="input-heading">
        What's making you happy right now?
      </label>
      <textarea
        value={message}
        className="input-messege"
        type="text"
        onChange={(event) => setMessage(event.target.value)}
        className="form-text"
      ></textarea>
      <p className="characters-left">characters left</p>
      <button
        className="btn-thought"
        type="submit"
        value="happyThought"
        disabled={message.length < 6 || message.length > 140 ? true : false}
      >
        🖤 Send a happy thought 🖤
      </button>
    </form>
  );
};

export default MessageInput;
