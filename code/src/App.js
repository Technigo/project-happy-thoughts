import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL, LIKE_URL } from './reusable/urls';


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

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    };

    fetch(API_URL, options)
      .then(res => res.json())
      .then(recivedThought => setThoughtsList([...thoughtsList, recivedThought]))
  }

  const onLikesIncrease = () => {
    fetch(LIKE_URL())
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
          <span role="img" aria-label="heart-icon">❤️</span>
          Send Happy Thought
          <span role="img" aria-label="heart-icon">❤️</span>
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
