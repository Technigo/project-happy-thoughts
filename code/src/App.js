import React, { useState, useEffect } from 'react';
// import { SendThought } from 'components/SendThought/SendThought';

import { ThoughtsFeed } from 'components/ThoughtsFeed/ThoughtsFeed';

export const App = () => {
  const [thoughtsFeed, setThoughtsFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(data => setThoughtsFeed(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="outer-wrapper">
      <section className="thoughts-wrapper">
        {/* <SendThought /> */}
        <ThoughtsFeed />
      </section>
    </div>
  );
};
