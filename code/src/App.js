/* eslint-disable react/jsx-closing-bracket-location */
import NewThoughtForm from 'components/NewThoughtForm';
import ThoughtList from 'components/ThoughtList';
import { collectThoughts } from 'components/util';
import React, { useEffect, useState } from 'react';

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  // Loads the 20 latest happy thoughts on component mount
  useEffect(() => {
    collectThoughts(setLoading, setHappyThoughts);
  }, []);

  // Posts a new happy thought to the thoughts endpoint
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
      .then(() => collectThoughts(setLoading, setHappyThoughts))
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
  };

  return (
    <main>
      <NewThoughtForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit}
      />
      <ThoughtList thoughtList={happyThoughts} loading={loading} />
      <footer>
        <h3>© Joel Öhman</h3>
        <h3>Technigo Boot Camp autumn 2022, week 7 project</h3>
      </footer>
    </main>
  );
};
