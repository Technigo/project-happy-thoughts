import React, { useState, useEffect } from 'react';

import ThoughtItem from 'components/ThoughtItem';
import ThoughtForm from 'components/ThoughtForm';

export const App = () => {
  const [thoughtItem, setThoughtItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtItem(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

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
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchTasks())
      .finally(() => setNewThought(''));
  }

  return (
    <div>
      <ThoughtForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtItem
        loading={loading}
        thoughtItem={thoughtItem}
        setThoughtItem={setThoughtItem} />
    </div>
  );
}
