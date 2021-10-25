import React from 'react';
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';

import { API_URL } from './utils/urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThoughts] = useState('');
  const [newHearts, setNewHearts] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  const onHeartClick = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newHearts }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...newHearts]));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  return (
    <div className="mainContainer">
      <form className="newThought" onSubmit={onFormSubmit}>
        <label>What is making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThoughts(e.target.value)}
          placeholder="Write your happy thought here.."
        />
        <button type="submit"><img src="./images/red-heart.png" alt="Red heart emoji"/> Send happy thought! <img src="./images/red-heart.png" alt="Red heart emoji"/></button>
      </form>
      {thoughts.map((thought) => (
        <div className="posted-thoughts" key={thought._id} onSubmit={onHeartClick}>
          <p className="thought-message">{thought.message}</p>
          <button type="submit" onClick={(f) => setNewHearts(f.target.value)}>
          <img src="images/red-heart.png" alt="Red heart emoji"/>
          </button>
          <span className="thoughts-likes"> x {thought.hearts}</span>
          <p className="date">Created at: {moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};
