import React from "react";

const Form = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">Write new message!</label>
        <input
          id="newMessage"
          type="text"
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button type="submit">Send Message!</button>
      </form>
    </>
  );
};

export default Form;
