import React, { useState, useEffect } from 'react';
import { HappyForm } from './HappyForm';
import { HappyThought } from './HappyThought';

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);

  const happyThoughtsURL =
    'https://happy-thoughts-technigo.herokuapp.com/thoughts';

  useEffect(() => {
    fetch(happyThoughtsURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHappyThoughts(data);
      });
  }, []);

  // Add newHappyThought to existing array of happyThoughts
  const onMessageSubmit = (newHappyThought) => {
    console.log(newHappyThought);
    setHappyThoughts((previousHappyThoughts) => [
      newHappyThought,
      ...previousHappyThoughts,
    ]);
  };

  // Add hearts locally for instant UX response
  const onLikedThought = (likedThoughtId) => {
    const updatedHappyThoughts = happyThoughts.map((happyThought) => {
      if (happyThought._id === likedThoughtId) {
        happyThought.hearts += 1;
      }
      return happyThought;
    });
    setHappyThoughts(updatedHappyThoughts);
  };

  return (
    <main className="main-wrapper">
      <HappyForm onMessageSubmit={onMessageSubmit} />
      {happyThoughts.map((happyThought) => (
        <HappyThought
          key={happyThought._id}
          id={happyThought._id}
          message={happyThought.message}
          hearts={happyThought.hearts}
          createdAt={happyThought.createdAt}
          onLikedThought={onLikedThought}
        />
      ))}
    </main>
  );
};
