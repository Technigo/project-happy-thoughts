import React, { useState } from 'react';
import { THOUGHTS_URL } from '../App'
import './happyForm.css'

export const HappyForm = () => {
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(THOUGHTS_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      })
      .then(() => {
        setMessage('')
        window.location.reload();
      })
      .catch((err) => console.log('error', err))
  };
  return (
    <form className="happy-form">
      <h3>What&apos;s making you happy right now?</h3>
      <textarea
        rows="3"
        value={message}
        onChange={(event) => setMessage(event.target.value)} />
      <div className="form-footer">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!!(message.length < 6 || message.length > 140)}
          className="form-button">
          <span role="img" aria-label="Heart">❤️</span>
          Send happy thought!
          <span role="img" aria-label="Heart">❤️</span>
        </button>
        <p>{message.length} / 140</p>
      </div>
    </form>
  );
};