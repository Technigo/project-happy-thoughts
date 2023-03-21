import React from 'react';

export const SendThoughtForm = (props) => {
  return (
    <div>
      <form>
        <h1>What is making you happy today?</h1>
        <textarea
          value={props.newThought}
          onChange={props.onNewThoughtChange}
          placeholder="Type your happy thought here..."
          maxLength="140" />
        <button type="submit" onFormSubmit={props.handleFormSubmit}>Send Happy Thought</button>
      </form>
    </div>
  )
}