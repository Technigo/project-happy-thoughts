import React, { useState } from 'react';

const happyFormURL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';

export const HappyForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(happyFormURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        window.location.reload();
      });
  };

  return (
    <article className="happy-form-wrapper">
      <form className="happy-form-content" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">What's making you happy right now?</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            cols="30"
            onChange={(event) => setMessage(event.target.value)}
            value={message}></textarea>
          <button type="submit">
            <span className="heart">&hearts;</span> Send Happy Thoughts{' '}
            <span className="heart">&hearts;</span>
          </button>
        </div>
      </form>
    </article>
  );
};
