import React, { useState } from 'react';

export const Submit = () => {
  const [inputText, setInputText] = useState('');

  const submitThought = (event) => {
    event.preventDefault();
    console.log(inputText);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({ message: `${inputText}` }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((newThought) => {
        console.log(newThought);
        // setResponse(newThought); Needs to be passed somewhere!
      })
    setInputText('');
  };

  return (
    <form onSubmit={submitThought}>
      <label htmlFor="text-area">Whats making you happy right now?
        <textarea name="text-area" id="text-area" value={inputText} onChange={((event) => setInputText(event.target.value))} />
        <button type="submit">
            &#x2764;Send Happy Thought&#x2764;
        </button>
      </label>
    </form>
  )
}