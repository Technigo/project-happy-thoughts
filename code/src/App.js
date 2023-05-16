import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { ListThoughts } from './components/ListThoughts';
import { SendThoughts } from './components/SendThoughts';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(false);
  const [confetti, setConfetti] = useState({ showConfetti: false })

  const fetchToughts = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-c6cfxyvlgq-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data.response))
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

    fetch('https://project-happy-thoughts-api-c6cfxyvlgq-lz.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then(() => {
        setConfetti({ showConfetti: true })
        setNewThought('');
        setTimeout(() => window.location.reload(), 3000)
      })
  }

  /* post data for like buttpn */
  const handleLikeChange = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://project-happy-thoughts-api-c6cfxyvlgq-lz.a.run.app/thoughts/${id}/like`, options)
      .then((response) => response.json())
      .then((data) => {
        const UpdateLikes = thoughtsList.map((like) => {
          // eslint-disable-next-line no-underscore-dangle
          if (like._id === data.response._id) {
            like.hearts += 1
            return like
          } else { return like }
        })
        setThoughtsList(UpdateLikes)
      })
  }

  return (
    <div className="app">
      {confetti.showConfetti && <Confetti color={['#ff9aa2', '#ffb7b2', '#ffdac1', '#e2f0cb', '#b5ead7', '#c7ceea']} numberOfPieces={200} />}
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
