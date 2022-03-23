import React, { useState } from "react";
import { postMessages } from "assets/networking";

import "./SendMessageCard.css";

const SendMessageCard = ({ setMessages }) => {
  const [messageInput, setMessageInput] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    postMessages(messageInput, (message) => {
      setMessages((previousMessages) => [message, ...previousMessages]);
    });
    setMessageInput("");
  };

  return (
    <form className="message-form" onSubmit={handleOnSubmit}>
      <label htmlFor="text area" className="message-question">
        What's making you happy right now?
      </label>

      <textarea
        id="text area"
        type="text"
        className="message-input"
        value={messageInput}
        placeholder="Message..."
        rows={3}
        minLength="5"
        maxLength="140"
        required
        autoFocus
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button type="submit" className="message-send-button">
        ❤️ Send happy thought ❤️
      </button>
    </form>
  );
};

export default SendMessageCard;
