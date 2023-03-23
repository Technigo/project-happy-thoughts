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
      .catch((error) => console.log(error))
      .finally(() => setNewThought(''))
  }

  /* post data for like buttpn */
  const handleLikeChange = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, options)
      .then((response) => response.json())
      .then((data) => {
        const UpdateLikes = thoughtsList.map((like) => {
          // eslint-disable-next-line no-underscore-dangle
          if (like._id === data._id) {
            like.hearts += 1
            return like
          } else { return like }
        })
        setThoughtsList(UpdateLikes)
      })
      // .finally(() => fetchToughts(''))
  }

  return (
    <div className="app">
      <SendThoughts
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChanges}
        onFormSubmit={onFormSubmit} />
      <ListThoughts
        loading={loading}
        thoughtsList={thoughtsList}
        handleLikeChange={handleLikeChange} />
    </div>
  );
}
