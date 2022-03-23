import React, { useState, useEffect } from 'react';

import RecentThoughts from './components/RecentThoughts';
import NewThoughts from './components/NewThoughts';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  console.log(thoughts);

  return (
    <div>
      <RecentThoughts thoughts={thoughts} />
      <NewThoughts />
    </div>
  );
};
