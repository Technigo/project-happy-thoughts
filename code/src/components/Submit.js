import React, { useState } from 'react';

export const Submit = () => {
  const [inputText, setInputText] = useState('');

  const submitThought = (event) => {
    event.preventDefault();
    console.log(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={submitThought}>
      <label htmlFor="text-area">Whats making you happy right now?
        <textarea name="text-area" id="text-area" value={inputText} onChange={((event) => setInputText(event.target.value))} />
        <button type="submit">Send Happy Thought</button>
      </label>
    </form>
  )
}