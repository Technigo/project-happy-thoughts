/* eslint-disable react/void-dom-elements-no-children */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line padded-blocks
export const MessageInput = () => {

  const MESSAGES_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  // eslint-disable-next-line no-undef
  const [message, setMessage] = useState('');
  // eslint-disable-next-line no-trailing-spaces
  
  // eslint-disable-next-line arrow-parens
  const handleSubmit = event => {
    event.preventDefault();

    fetch(MESSAGES_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: message })
      }
    // eslint-disable-next-line function-paren-newline
    ).then(() => {
      window.location.reload();
    });
  };

  return (
    // eslint-disable-next-line react/jsx-tag-spacing
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-text"
        // eslint-disable-next-line arrow-parens
        onChange={event => setMessage(event.target.value)} />
      <input
        type="submit"
        className="form-button"
        value="Add Message" />
    </form>
  );
};