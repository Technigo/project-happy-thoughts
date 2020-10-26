import React, { useState } from 'react';

export const HappyForm = () => {
  const happyFormURL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [postMessage, setPostMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(happyFormURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ message: postMessage }),
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
            onChange={(event) => setPostMessage(event.target.value)}
            value={postMessage}></textarea>
          <button type="submit">
            <span className="heart">&hearts;</span> Send Happy Thoughts{' '}
            <span className="heart">&hearts;</span>
          </button>
        </div>
      </form>
    </article>
  );
};
