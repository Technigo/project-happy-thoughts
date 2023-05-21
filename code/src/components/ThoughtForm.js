import React, { useState, useEffect } from 'react';

export const ThoughtForm = ({ likeCount }) => {
  const [newThought, setNewThought] = useState('');
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState();
  const [minMaxCount, setMinMaxCount] = useState(false);

  const API = 'https://project-happy-thoughts-api-3t72lksv4a-lz.a.run.app/thoughts'

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (newThought.length < 5 || newThought.length >= 141) {
      return alert('Oh no, you have too few or too many characters! Please, try again.')
    } else {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought, name: newName, category: newCategory })
      };
      fetch(`${API}`, options)
        .then((response) => response.json())
        .then(() => {
          setNewThought('');
          setNewName('');
          setNewCategory('')
          window.location.reload();
        })
    }
  }

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  const onNewNameChange = (event) => {
    setNewName(event.target.value);
  }

  const onNewCategoryChange = (event) => {
    setNewCategory(event.target.value);
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
      <div className="form-input">
        <label htmlFor="name-input">
          <input
            type="text"
            name="name-input"
            id="name-input"
            className="text-input name"
            value={newName}
            onChange={onNewNameChange}
            placeholder="Name..." />
        </label>
        <label htmlFor="category">
          <select
            id="category"
            className="select"
            onChange={onNewCategoryChange}
            value={newCategory}>
            <option value="">Category...</option>
            <option value="Food thought">Food thought</option>
            <option value="Project thought">Project thought</option>
            <option value="Home thought">Home thought</option>
          </select>
        </label>
      </div>
      <div className="form-details">
        <button
          className="send-button"
          type="submit">
          ❤️ <span>Send Happy Thought</span> ❤️
        </button>
        <div className="details-count">
          <p>
            <span className={`number-count ${minMaxCount ? 'red-number' : ''}`}>
              {newThought.length}
            </span> / 140
          </p>
          <p>Likes: {likeCount}</p>
        </div>
      </div>
    </form>
  )
}
