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
      <label>
        {error && (
          <div className="error">
            <p>
              Please make sure the message is between 5- 140 characters long
            </p>
          </div>
        )}
        Please share a happy thought!
        <textarea
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            setMessageLength(event.target.value.length);
          }}
          className="text-input"
        ></textarea>
        <p>
          Characters left:{" "}
          {messageLength > 141 ? (
            <span className="too-long"> {140 - messageLength}</span>
          ) : (
            <span> {140 - messageLength}</span>
          )}
        </p>
      </label>
      <button disabled={messageLength < 5 || messageLength > 141} type="submit">
        Add a happy thought!
      </button>
    </form>
  );
};

export default Form;
