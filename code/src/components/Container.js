import React, { useState, useEffect } from 'react';
import HappyThoughts from './HappyThoughts';
import HappyThoughtsForm from './HappyThoughtsForm';

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [newHappyThought, setNewHappyThought] = useState('');

  const fetchHappyThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setHappyThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchHappyThoughts();
  }, []);

  return (
    <div>
      <HappyThoughtsForm
        newHappyThought={newHappyThought}
        fetchHappyThoughts={fetchHappyThoughts} />
      <HappyThoughts
        loading={loading}
        happyThoughts={happyThoughts}
        setNewHappyThought={setNewHappyThought} />
    </div>
  )
};
export default Container;