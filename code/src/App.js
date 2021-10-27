import React, { useEffect, useState } from 'react';
import heart from './images/red-heart.png'; // Getting the red heart emoji

import { API_URL, LIKES_URL } from './utils/urls'; // The URL to the API
import NewThought from 'components/NewThought';
import AllThoughts from 'components/AllThoughts';
import LoadingItem from 'components/Loading';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThoughts] = useState('');
  const [loadingPage, setLoadingPage] = useState(false);

  // Getting the posts
  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoadingPage(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoadingPage(false));
  };

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
    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <div className="mainContainer">
      <h1>Welcome to my happy thoughts generator!</h1>
      {loadingPage && <LoadingItem />}
      <NewThought
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        heart={heart}
        setNewThoughts={setNewThoughts}
      />
      {thoughts.map((thought) => (
        <AllThoughts thought={thought} onLikesIncrease={onLikesIncrease} heart={heart} />
      ))}
    </div>
  );
};
