import React, { useState, useEffect } from 'react';
import { HappyForm } from './HappyForm';
import { HappyThoughts } from './HappyThoughts';

const happyThoughtsURL =
  'https://happy-thoughts-technigo.herokuapp.com/thoughts';

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);

  useEffect(() => {
    fetch(happyThoughtsURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHappyThoughts(data);
      });
  }, []);

  return (
    <main className="main-wrapper">
      <HappyForm />
      {happyThoughts.map((happyThought) => (
        <HappyThoughts key={happyThought._id} happyThought={happyThought} />
      ))}
    </main>
  );
};
