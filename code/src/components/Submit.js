import React, { useState } from 'react';

export const Submit = ({ thoughtAdder }) => {
  const [inputText, setInputText] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({ message: `${inputText}` }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((newThought) => {
        thoughtAdder(newThought);
        // setThoughts(newThought); Needs to be passed somewhere!
      })
  };

  return (
    <div className="submit-div">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="text-area">Whats making you happy right now?
          <textarea name="text-area" id="text-area" value={inputText} onChange={((event) => setInputText(event.target.value))} />
          <button className="submit-button" type="submit">
          ❤️Send Happy Thought❤️
          </button>
        </label>
      </form>
    </div>
  )
}