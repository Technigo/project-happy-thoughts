import React from 'react';
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';

import { API_URL } from './utils/urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThoughts] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

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
    <div>
      <form className="newThought" onSubmit={onFormSubmit}>
        <label>What is making you happy right now?</label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThoughts(e.target.value)}
        />
        <button type="submit">&hearts; Send happy thought! &hearts;</button>
      </form>
      {thoughts.map((thought) => (
        <div className="posted-thoughts" key={thought._id}>
          <p>{thought.message}</p>
          <button> &hearts; {thought.hearts}</button>
          <p className="dage">Created at: {moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};
