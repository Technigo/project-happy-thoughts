import React, { useState, useEffect } from 'react';
import ThoughtsList from 'components/Thoughts list/ThoughtsList';
import ThoughtsForm from 'components/Thoughts form/ThoughtsForm';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');
  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(data => setThoughtsList(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

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
      .then(res => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewThought(''));
  }

  const onNewHearthSubmit = (_id) => {
    const options = { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      } }

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, options)
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts())
  }
 
  return (
    <div>
      <ThoughtsForm
        newThought={newThought}
        handleNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit}
      />
      <ThoughtsList
        loading={loading}
        thoughtsList={thoughtsList}
        setThoughtsList={setThoughtsList}
        onNewHearthSubmit={onNewHearthSubmit}
      />
    </div>
  );
}
