import React, { useEffect, useState } from 'react';
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
    <>
      <div>
        <HappyThoughtsForm
          newHappyThought={newHappyThought}
          fetchHappyThoughts={fetchHappyThoughts}
          setNewHappyThought={setNewHappyThought} />
        <div className="bunny-container" />
        <span className="bunny">   /)   /)<br />
        (ᵔ ᵕ ᵔ) <br />
        / づ  づ ~ ♡
        </span>
      </div>
      <HappyThoughts
        loading={loading}
        happyThoughts={happyThoughts}
        setNewHappyThought={setNewHappyThought} />
    </>
  )
};
export default Container;