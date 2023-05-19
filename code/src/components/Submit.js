/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { myApi } from './apiList';

export const Submit = ({ thoughtsList, setThoughtsList }) => {
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch(myApi, {
      method: 'POST',
      body: JSON.stringify({ message: inputText, category: selectedCategory }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        setInputText('');
        if (!response.ok) {
          throw new Error('Could not upload thought, message must be between 5 and 140 characters long');
        }
        return response.json();
      })
      .then((newThought) => {
        setThoughtsList([newThought, ...thoughtsList])
      })
      .catch((error) => {
        console.log(error);
        alert('Your message must be at least 5 characters long and not longer than 140 characters :)')
      })
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="submit-container">
      <form onSubmit={handleFormSubmit}>
        <label className="textarea-container" htmlFor="text-area">What's making you happy right now?
          <textarea name="text-area" id="text-area" placeholder="Type your happy thought here :)" rows={3} cols={70} minLength={5} value={inputText} onChange={((event) => setInputText(event.target.value))} />
        </label>
        <label className="select-container" htmlFor="category-select">Select a category:
          <select name="category-select" id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select category (optional)</option>
            <option value="weather">Weather</option>
            <option value="mood">Mood</option>
            <option value="professional">Professional</option>
            <option value="personal">Personal</option>
            <option value="achievement">Achievement</option>
            <option value="funny">Funny</option>
            <option value="family">Family</option>
            <option value="weekend">Weekend</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button className="submit-button" type="submit">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  )
};