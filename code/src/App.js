import React, { useState, useEffect } from 'react';
import moment from 'moment';

import API_URL from './reusable/urls';


export const App = () => {

  const [thoughtsList, setThoughtsList] = useState([]);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetchThoughtList()
  }, []);

  const fetchThoughtList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(err => console.error(err));
  }

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/jason'
      },
      body: JSON.stringify({ text: newThought })
    })
  }

  return (

    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="thoughts">What's making you happy right now? </label>
        <input
          id="thoughts"
          type="text"
          value={newThought}
          onChange={onNewThoughtChange}
        />
        <button type="submit">
          <img src="./assets/heart.svg" alt="heart-icon" />
          <p>Send Happy Thought</p>
        </button>
      </form>
      {thoughtsList.map(thought => (
        <div
          key={thought._id}>
          <h4>{thought.message}</h4>
          <p>{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
