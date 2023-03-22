import React, { useState } from 'react';

export const Submit = () => {
  const [inputText, setInputText] = useState('');

  const submitThought = (event) => {
    event.preventDefault();
    console.log(inputText);
    // Replace console.log with api-post
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify(inputText)
    })
      .then((response) => response.json())
      .then((newThought) => {
        console.log(newThought)
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