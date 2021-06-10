import React from "react";

import SubmitButton from "./SubmitButton";
import "../styles/MessageForm.css";

const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <>
      <form className="new-message-form" onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">What's making you happy right now?</label>
        <textarea
          className="new-message"
          id="newMessage"
          type="text"
          placeholder="Share your Happy Thoughts with us!"
          value={messageNew}
          onChange={onMessageNewChange}
        ></textarea>
          <p className='character-counter'>{messageNew.length}/140</p>
        <SubmitButton />
      </form>
    </>
  );
};

export default MessageForm;
