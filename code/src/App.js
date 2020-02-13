import React, { useState, useEffect } from 'react';
import { Thoughts } from 'Thoughts';
import { Form } from './Form';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [postMessage, setPostMessage] = useState('');

  useEffect(() => {
    fetch('https://happy-thoughts-app.herokuapp.com/')
      .then(res => res.json())
      .then(json => {
        setThoughts(json);
      });
  }, [postMessage]);

  const handleFormSubmit = message => {
    fetch('https://happy-thoughts-app.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .catch(() => {
        alert('try again');
      })
      .then(() => setPostMessage(message));
  };

  return (
    <div>
      <Form submitForm={handleFormSubmit} />

      <div>
        {thoughts.map(thought => (
          <Thoughts key={thought._id} thought={thought} />
        ))}
      </div>
    </div>
  );
};
