import React from "react";

const Form = ({ message, postMessage, setMessage }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        postMessage(message);
      }}
    >
      <label>
        Please share a happy thought!
        <textarea
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          className="text-input"
        ></textarea>
      </label>
      <button type="submit">Add a happy thought!</button>
    </form>
  );
};

export default Form;
