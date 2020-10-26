import React, { useState, useEffect } from 'react';
import { HappyForm } from './HappyForm';
import { HappyThought } from './HappyThought';

const happyThoughtsURL =
  'https://happy-thoughts-technigo.herokuapp.com/thoughts';

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);

  useEffect(() => {
    fetch(happyThoughtsURL)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setHappyThoughts(json);
      });
  }, []);

  const onMessageSubmit = (message) => {
    fetch(happyThoughtsURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ message: message }),
    })
      .then((response) => response.json())
      .then((newHappyThought) => {
        console.log(newHappyThought);
        setHappyThoughts((previousHappyThoughts) => [
          newHappyThought,
          ...previousHappyThoughts,
        ]);
      });
  };

  return (
    <main className="main-wrapper">
      <HappyForm onMessageSubmit={onMessageSubmit} />
      {happyThoughts.map((happyThought) => (
        <HappyThought key={happyThought._id} happyThought={happyThought} />
      ))}
    </main>
  );
};
