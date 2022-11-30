// import { Card } from 'components/Card';
import CreateThought from 'components/CreateThought';
import React, { useEffect, useState } from 'react';
import ThoughtsFeed from 'components/ThoughtsFeed';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  /* Get all Thoughts from the API and add them to `thoughtsList` */
  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-p52jzdhmrq-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  console.log({ thoughtList, loading, newThought });

  return (
    <div>
      <CreateThought
        newThought={newThought}
        setNewThought={setNewThought}
        fetchThoughts={fetchThoughts}
      />
      <ThoughtsFeed loading={loading} thoughtList={thoughtList} />
    </div>
  );
};
