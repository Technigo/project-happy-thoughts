import React, { useState, useEffect } from 'react';

import HappyThoughtsList from 'components/HappyThoughtsList';
import HappyThoughtsForm from 'components/HappyThoughtsForm';

export const App = () => {
  const [happyThoughtsList, setHappyThoughtsList] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setHappyThoughtsList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const onAddNewThought = (event) => {
    setNewThought(event.target.value);
  }

  const handleFormCleanup = () => {
    setNewThought('');
    setLoading(false);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newThought
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup());
  }
  if (loading) {
    <p>The page is loading...</p>
  }

  return (
    <>
      <HappyThoughtsForm
        handleFormSubmit={handleFormSubmit}
        onAddNewThought={onAddNewThought}
        newThought={newThought} />
      <HappyThoughtsList list={happyThoughtsList} />
    </>
  );
}
