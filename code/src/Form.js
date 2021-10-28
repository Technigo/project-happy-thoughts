import React from "react";

import { useState } from "react";

const Form = ({ message, postMessage, setMessage, error }) => {
  const [messageLength, setMessageLength] = useState(0);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        postMessage(message);
      }}
    >
      <label className="message-label">
        {error && (
          <div className="error">
            <p>
              Please make sure the message is between 5- 140 characters long
            </p>
          </div>
        )}
        <h1 className="form-title">Please share a happy thought!</h1>
        <textarea
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            setMessageLength(event.target.value.length);
          }}
          className="text-input"
          placeholder="Type your thought here"
        ></textarea>
      </label>
      <div className="inline-wrapper">
        <button
          disabled={messageLength < 5 || messageLength > 141}
          type="submit"
          className="btn-send-msg"
        >
          Add a happy thought!
        </button>
        <p className="characters-left">
          characters left:
          {messageLength > 141 ? (
            <span className="too-long"> {140 - messageLength}</span>
          ) : (
            <span> {140 - messageLength}</span>
          )}
        </p>
      </div>
    </form>
  );
};

export default Form;
