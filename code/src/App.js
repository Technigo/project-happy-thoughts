/* eslint-disable */
import React, { useEffect, useState } from 'react';

import Thoughts from 'components/Thoughts';
import NewThought from 'components/NewThought';
import Header from 'components/Header';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');

  return (
    <section className="main-feed">
      <div className="feed-conatiner">
        <Header />
        <NewThought 
          newThought={newThought} 
          setNewThought={setNewThought} 
          thoughts={thoughts} 
          setThoughts={setThoughts} />
        <Thoughts thoughts={thoughts} setThoughts={setThoughts} />
      </div>
    </section>
  );
}