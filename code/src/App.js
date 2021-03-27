import React, { useState, useEffect } from 'react';

import FormContent from './components/FormContent';
import ListThoughts from './components/ListThoughts';

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

  const handlenewThoughtChange = (event) => {
    setNewThought(event.target.value);
    setThoughtLength(event.target.value.length);
  }

  const handleFormSubmit = (event) => {
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

  const handleHeartsIncrease = (id) => {
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
      <FormContent 
        newThought={newThought}
        onnewThoughtChange={handlenewThoughtChange}
        thoughtLength={thoughtLength}
        onFormSubmit={handleFormSubmit}
      />
      <ListThoughts
        thoughtsList={thoughtsList}
        onHeartsIncrease={handleHeartsIncrease}
      />
       <p className="footer-text">Project made @ Technigo by Mette Wickert &copy;2021</p>
    </div>
  )
}