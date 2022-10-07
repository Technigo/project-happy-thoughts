/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';

import { ThoughtsForm } from './ThoughtsForm';
import { ThoughtsList } from './ThoughtsList';

export const ThoughtsPage = () => {
  //   const [counter, setCounter] = useState(0);
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughts(transformedData))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  // useEffect with empty array [] call your functions on application start
  useEffect(() => {
    fetchThoughts();
  }, []);

  // will trigger first when app starts, and every time the variable in the dependency array changes

  //   useEffect(() => {}, [counter]);

  //   const handleCounterIncreaseButtonClick = () => {
  //     setCounter(counter + 1);
  //   };

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);

    console.log(event);
  };

  // This code empties the form
  const handleFormCleanup = () => {
    setNewThought('');
    setLoading(false);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newThought,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then(() => fetchThoughts())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup());
  };

  if (loading) {
    return <p>page loading..</p>;
  }
  return (
    <div className="main-container">
      <ThoughtsForm
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange}
        onFormSubmit={onFormSubmit}
      />
      <ThoughtsList thoughts={thoughts} />
    </div>
  );
};
