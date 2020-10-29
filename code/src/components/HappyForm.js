import React, { useState } from 'react';

export const HappyForm = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');
  const [messageOK, setMessageOK] = useState(true);

  const happyThoughtsURL =
    'https://happy-thoughts-technigo.herokuapp.com/thoughts';

  const handleSubmit = (event) => {
    event.preventDefault(); // To prevent refresh of window at click of button

    fetch(happyThoughtsURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
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
          {!messageOK && (
            <p>Message must be between 5 to 140 characters long!</p>
          )}
          <button type="submit">
            <span className="heart">&hearts;</span> Send Happy Thoughts{' '}
            <span className="heart">&hearts;</span>
          </button>
        </div>
      </form>
    </article>
  );
};
