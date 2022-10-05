import React, { useState, useEffect } from 'react';

import ThoughtForm from 'components/ThoughtForm/ThoughtForm';
import ThoughtsFeed from 'components/ThoughtsFeed/ThoughtsFeed';

const App = () => {
  const [thoughtsFeed, setThoughtsFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtsFeed(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div className="outer-wrapper">
      <section className="app-wrapper">
        <ThoughtForm setThoughtsFeed={setThoughtsFeed} />
        <ThoughtsFeed
          loading={loading}
          thoughtsFeed={thoughtsFeed}
          setThoughtsFeed={setThoughtsFeed} />
      </section>
    </div>
  );
};

export default App;
