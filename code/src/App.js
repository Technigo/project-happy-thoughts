import React from 'react';
import moment from 'moment'; // getting moment to be able to format the time
import { useEffect } from 'react';
import { useState } from 'react';
import heart from './images/red-heart.png'; // Getting the red heart emoji

import { API_URL } from './utils/urls'; // The URL to the API

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThoughts] = useState('');

  // Getting the posts
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  // Posting a new happy thought
  const onFormSubmit = (event) => {
    event.preventDefault();

    const optionsThoughts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, optionsThoughts)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    };
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, options)
      .then((res) => res.json())
      .then((data) => {
        // vanilla JS map function that iterates through the items
        const updatedThoughts = thoughts.map((item) => {
          if (item._id === data._id) {
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        });

        setThoughts(updatedThoughts);
      });
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
        <button type="submit">
          <img src={heart} alt="Red heart emoji" /> Send happy thought!{' '}
          <img src={heart} alt="Red heart emoji" />
        </button>
      </form>
      {thoughts.map((thought) => (
        <div className="posted-thoughts" key={thought._id}>
          <p className="thought-message">{thought.message}</p>
          <button onClick={() => onLikesIncrease(thought._id)}>
            <img src={heart} alt="Red heart emoji" />
          </button>
          <span className="thoughts-likes"> x {thought.hearts}</span>
          <p className="date">Created at: {moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};
