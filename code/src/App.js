import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL } from 'reusable/url.js';
import { API_URL_HEARTS } from 'reusable/url.js';

export const App = () => {
  const [thoughtsList, setThoughtsList]=useState([]);
  const [newThought, setNewThought]=useState("");
  const [thoughtLength, setThoughtLength] = useState('0');
  

  useEffect(() => {
    fetchThoughtsList();
  }, []);

  const fetchThoughtsList = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(err => console.error(err));
  }

  console.log(thoughtsList);

  const onnewThoughtChange = (event) => {
    setNewThought(event.target.value);
    setThoughtLength(event.target.value.length);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "message": newThought })
    };

    fetch(API_URL, options)
      .then(response => response.json())
      .then(addThought => setThoughtsList([addThought,...thoughtsList]))
      .catch(err => console.error(err));
  }

  const onHeartsIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(API_URL_HEARTS(id), options)
      .then(response => response.json())
      .then(addThought => {
        const updatedthoughtsList = thoughtsList.map(thought => {
          if (thought._id === addThought._id) {
            thought.hearts += 1;
          }
          return thought;
        });
        setThoughtsList(updatedthoughtsList);
      })
    .catch(err => console.error(err));
  }

  return (
    <div className="content-container">
      <form className="form" onSubmit={onFormSubmit}>
        <label htmlFor="happyThought">
          <p className="label-p">What's making you happy right now?</p>
        </label>
          <textarea maxLength="140" className="form-input"
            id="happyThought"
            type="text"
            value={newThought}
            onChange={onnewThoughtChange}
            placeholder="type here..."
          />
          <p className="maxlength-words">{thoughtLength}/140</p>
        <button className="submit-button" type="submit"><span className="heart-icon1" aria-label="heart-icon" role="img">❤️</span>Send Happy Thought<span className="heart-icon2" aria-label="heart-icon" role="img">❤️</span></button>
      </form>
      {thoughtsList.map(thought => (
        <div className="thought-box" key={thought._id}>
          <p className="thought-post">{thought.message}</p>
          <div className="details-container">
            <button className="hearts-number" onClick={() => onHeartsIncrease(thought._id)}
          >
            <div className="heart-box" style={{
					background: thought.hearts > 0 ? '#ffadad' : '#e9e9e9',
				}}><span className="like-heart" aria-label="heart-icon" role="img" >❤️</span> </div>
           <div className="hearts-amount">
            <span className="multiply">x </span>
            <span className="number-of-hearts">{thought.hearts}</span>
            </div>
          </button>
          <p className="time-posted">{moment(thought.createdAt).fromNow()}</p>
         </div>
        </div>
      ))}
       <p className="footer-text">Project made @ Technigo by Mette Wickert &copy;2021</p>
    </div>
  )
}