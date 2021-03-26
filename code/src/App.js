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
    setNewThought(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', newThought)

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
      .catch(err => console.error(err));

  }

  const onLikesIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(LIKE_URL(id), options)
      .then(res => res.json())
      .then(recivedThought => {
        const updatedThoughtsList = thoughtsList.map(thought => {
          if (thought._id === recivedThought._id) {
            thought.hearts += 1;
          }
          return thought;
        });
        setThoughtsList(updatedThoughtsList);
      })
  }



  return (

    <div className="form-container">
      <form className="form" onSubmit={onFormSubmit}>
        <label className="thoughts-label"
          htmlFor="thoughts">
          What's making you happy right now?
        </label>
        <input className="input-thought"
          id="thoughts"
          type="text"
          value={newThought}
          onChange={onNewThoughtChange}
        />
        <button className="send-button" type="submit">
          <span role="img" aria-label="heart-icon">❤️</span>
          Send Happy Thought
          <span role="img" aria-label="heart-icon">❤️</span>
        </button>
      </form>
      {thoughtsList.map(thought => (
        <div className="thoughts-container"
          key={thought._id}>
          <h4>{thought.message}</h4>
          <button onClick={() => onLikesIncrease(thought._id)}>
            {thought.hearts}
            <span role="img" aria-label="heart-icon">❤️</span>
          </button>
          <p>{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
