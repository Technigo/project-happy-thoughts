import React, { useState } from 'react';

export const Submit = ({ thoughtsList, setThoughtsList }) => {
  const [inputText, setInputText] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({ message: `${inputText}` }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not upload thought');
        }
        return response.json();
      })
      .then((newThought) => {
        setThoughtsList([newThought, ...thoughtsList])
      })
      .catch((error) => {
        console.log(error);
        alert('Your text must be at least 5 characters long and not longer than 140 characters :)')
      })
  };

  return (
    <div className="submit-container">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="text-area">Whats making you happy right now?
          <textarea name="text-area" id="text-area" rows={4} cols={70} minLength={5} maxLength={140} value={inputText} onChange={((event) => setInputText(event.target.value))} />
          <button className="submit-button" type="submit">
          ❤️Send Happy Thought❤️
          </button>
        </label>
      </form>
    </div>
  )
}