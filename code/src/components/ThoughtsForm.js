import React from "react";

export const ThoughtsForm = ({ newMessages, setNewMessages, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Welcome to write a message about you thoughts below</h1>
      <textarea value={newMessages} onChange={setNewMessages} />
      <button type="submit">Submit form!</button>
    </form>
  );
};
