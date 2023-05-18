import React, { useState, useEffect } from 'react';
import Footer from 'components/Footer';
import { ThoughtList } from './components/ThoughtList';
import { ThoughtForm } from './components/ThoughtForm';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-b3mvziy4bq-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
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

    fetch('https://project-happy-thoughts-api-b3mvziy4bq-lz.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .then(() => setNewThought(''));
  }

  const handleLikeChange = (thoughtId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://project-happy-thoughts-api-b3mvziy4bq-lz.a.run.app/thoughts/${thoughtId}/like`, options)
      .then((res) => res.json())
      .then(console.log('like amount updated'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts(''))
  }

  return (
    <div className="App">
      <div className="title">Spread some happy vibes!</div>
      <ThoughtForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtList
        loading={loading}
        thoughtList={thoughtList}
        handleLikeChange={handleLikeChange} />
      <Footer />
    </div>
  );
}

