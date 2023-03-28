import React, { useState, useEffect } from 'react';

export const ThoughtForm = () => {
  const [newThought, setNewThought] = useState('');
  const [minMaxCount, setMinMaxCount] = useState(false);

  const API = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (newThought.length < 5 || newThought.length >= 141) {
      return alert('Oh no, you have too few or too many characters! Please, try again.')
    } else {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought })
      };
      fetch(`${API}`, options)
        .then((response) => response.json())
        .then(() => {
          setNewThought('');
          window.location.reload();
        })
    }
  }

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  useEffect(() => {
    if (newThought.length < 5 || newThought.length >= 141) {
      setMinMaxCount(true)
    } else {
      setMinMaxCount(false)
    }
  }, [newThought.length]);

  return (
    <form className="thoughtForm" onSubmit={onFormSubmit}>
      <h3>What&apos;s making you happy right now?</h3>
      <label htmlFor="thought-input">
        <textarea
          name="thought-input"
          id="thought-input"
          className={`text-input ${minMaxCount ? 'red-text' : ''}`}
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Type your happy thought..." />
      </label>
      <div className="form-details">
        <p><span className={`number-count ${minMaxCount ? 'red-number' : ''}`}>{newThought.length}</span> / 140</p>
        <button
          className="send-button"
          type="submit">
          ❤️ <span>Send Happy Thought</span> ❤️
        </button>
      </div>
    </form>
  )
}
