import React, { useState } from 'react';
import './HappyForm.css';

export const HappyForm = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');
  const [messageOK, setMessageOK] = useState(true);

  const happyThoughtsURL =
    'https://happy-thoughts-by-ylva.herokuapp.com/thoughts';

  const handleSubmit = (event) => {
    event.preventDefault(); // To prevent refresh of window at click of button

    fetch(happyThoughtsURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          setMessageOK(true);
          return response.json();
        } else {
          setMessageOK(false);
          throw Error(response.statusText);
        }
      })
      .then((newHappyThought) => {
        console.log({ newHappyThought });
        onMessageSubmit(newHappyThought);
        setMessage('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <article className="happy-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="happy-form-content">
          <label htmlFor="message">What's making you happy right now?</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            onChange={(event) => setMessage(event.target.value)}
            value={message}></textarea>
          {!messageOK && (
            <p>Message must be between 5 to 140 characters long!</p>
          )}
          <button type="submit" className="button-form">
            <span role="img" aria-label="Heart">
              {'❤️ '}
            </span>
            Send Happy Thoughts
            <span role="img" aria-label="Heart">
              {' ❤️'}
            </span>
          </button>
          <p>
            {message.length}{' '}
            {message.length < 5
              ? 'is too few characters'
              : message.length > 140
              ? 'is too many characters'
              : 'is just fine, send a Happy Thought!'}
          </p>
        </div>
      </form>
    </article>
  );
};
