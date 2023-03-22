import React, { useState, useEffect } from 'react';
import { ListThoughts } from './components/ListThoughts';
import { SendThoughts } from './components/SendThoughts';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchToughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) });
  }

  console.log(thoughtsList)

  useEffect(() => {
    fetchToughts();
  }, []);

  const handleNewThoughtChanges = (event) => {
    setNewThought(event.target.value);
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

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then(() => fetchToughts())
      .finally(() => setNewThought(''))
  }

  return (
    <div>
      <SendThoughts
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChanges}
        onFormSubmit={onFormSubmit} />
      <ListThoughts
        loading={loading}
        thoughtsList={thoughtsList} />
    </div>
  );
}
