import React, { useState } from 'react';

export const HappyForm = ({ onMessageSubmit, messageOK }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onMessageSubmit(message);
    setMessage('');
  };

  return (
    <article className="happy-form-wrapper">
      <form
        className="happy-form-content"
        onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="message">What's making you happy right now?</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            cols="30"
            onChange={(event) => setMessage(event.target.value)}
            value={message}></textarea>
          {!messageOK && <p>Length of message, min 5 and max 140! </p>}
          <button type="submit">
            <span className="heart">&hearts;</span> Send Happy Thoughts{' '}
            <span className="heart">&hearts;</span>
          </button>
        </div>
      </form>
    </article>
  );
};
