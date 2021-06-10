import React from "react";

import SubmitButton from "./SubmitButton";
import "../styles/MessageForm.css";

const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <>
      <form className="new-message-form" onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">What's making you happy right now?</label>
        <textarea
          className= {messageNew.length > 140 ? 'textarea-invalid' : 'textarea-valid'}
          id="newMessage"
          type="text"
          rows="5"
          placeholder="Share the happy!"
          value={messageNew}
          onChange={onMessageNewChange}
        ></textarea>
        <SubmitButton />
      </form>
    </>
  );
};

export default MessageForm;
