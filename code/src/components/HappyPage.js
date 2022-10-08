import React, { useState, useEffect } from 'react';

import HappyList from 'components/HappyList';
import HappyForm from 'components/HappyForm'

const HappyPage = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [newThought, setNewThought] = useState('');

  const getHappyThoughts = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughtList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('no errors'))
  }

  useEffect(() => {
    getHappyThoughts();
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleFormCleanup = () => {
    setNewThought('');
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
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then(() => getHappyThoughts())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup());
  }

  const handleHeartClick = (thoughtId) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then(() => getHappyThoughts())
  }
  return (
    <main className="happy-page">
      <HappyForm
        handleFormSubmit={handleFormSubmit}
        handleNewThoughtChange={handleNewThoughtChange}
        newThought={newThought} />
      <HappyList
        thoughtList={thoughtList}
        handleHeartClick={handleHeartClick} />
    </main>
  );
}

export default HappyPage