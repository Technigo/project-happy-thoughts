import React from "react";

import './SendMessageCard.css'

const SendMessageCard = () => {
  return (
    <form className="message-form" onSubmit={(e) => e.preventDefault()}>
      <h2 className="message-question">What's making you happy right now?</h2>

      <input
        type="text"
				className="message-input"
        placeholder="Name..."
        minLength="5"
        maxLength="140"
        required
        autoFocus
        //onChange event
      />
      <button type="submit" className="message-send-button">❤️ Send happy thought ❤️</button>
    </form>
  );
};

export default SendMessageCard;
