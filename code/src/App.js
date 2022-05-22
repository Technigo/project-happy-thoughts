import React, { useState, useEffect } from 'react';

import RecentThoughts from './components/RecentThoughts';
import NewThoughts from './components/NewThoughts';

export const App = () => {
  const API_URL =
    'https://happy-thoughts-projectapi.herokuapp.com/happy-thoughts';
  // const API_LIKES = (thoughtId) =>
  //   `https://happy-thoughts-projectapi.herokuapp.com/happy-thoughts/${thoughtId}/like`;

  const [thoughts, setThoughts] = useState([]);
  const [newThoughts, setNewThoughts] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data.response))
      .catch((error) => console.error(error));
  };

  const handleNewThoughtsChange = (e) => {
    setNewThoughts(e.target.value);
    setCounter(e.target.value.length);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: newThoughts,
      }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => {
        setNewThoughts('');
        setCounter(0);
      });
  };

  const handleLikesInc = (thoughtId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    };
    fetch(`${API_URL}/${thoughtId}/like`, options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data.response);
      });
  };

  return (
    <div className="main-container">
      <NewThoughts
        newThoughts={newThoughts}
        setNewThoughts={setNewThoughts}
        onNewThoughtsChange={handleNewThoughtsChange}
        handleFormSubmit={handleFormSubmit}
        counter={counter}
      />
      <RecentThoughts thoughts={thoughts} handleLikesInc={handleLikesInc} />
    </div>
  );
};

// const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
// const API_URL = 'https://happy-thoughts-projectapi.herokuapp.com/';
// https://happy-thoughts-projectapi.herokuapp.com/happy-thoughts
// const API_LIKES = (thoughtId) => `https://happy-thoughts-technigo.herokuapp.com/happy-thoughts/${thoughtId}/like`;
