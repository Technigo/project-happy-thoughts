/* eslint-disable react/jsx-closing-bracket-location */
import NewThoughtForm from 'components/NewThoughtForm';
import ThoughtList from 'components/ThoughtList';
import React, { useEffect, useState } from 'react';

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const collectThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setHappyThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  useEffect(() => {
    collectThoughts();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    };
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => collectThoughts())
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
  };

  console.log(happyThoughts);

  return (
    <main>
      <NewThoughtForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit}
      />
      <ThoughtList thoughtList={happyThoughts} loading={loading} />
    </main>
  );
};
