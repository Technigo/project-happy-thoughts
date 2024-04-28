/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import ThoughtsList from 'components/ThoughtsList';
import ThoughtsForm from 'components/ThoughtsForm';
import { Footer } from 'components/Footer';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');
  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-sfjig4oswa-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.error(error))
      .finally(() => setTimeout(() => { setLoading(false) }, 3000))
  };
  useEffect(() => {
    fetchThoughts();
  }, []);
  const handleNewThoughtChange = (e) => {
    setNewThought(e.target.value)
  };
  const postNewThought = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    };
    fetch('https://project-happy-thoughts-api-sfjig4oswa-lz.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((data) => setThoughtsList((prevList) => [data, ...prevList]));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    postNewThought();
    setNewThought('');
  }
  const handleLike = (_id) => {
    fetch(`https://project-happy-thoughts-api-sfjig4oswa-lz.a.run.app/thoughts/${_id}/like`, { method: 'POST' })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const updateLikes = thoughtsList.map((like) => {
          if (like._id === data._id) {
            like.hearts += 1;
            return like;
          } else {
            return like;
          }
        });
        setThoughtsList(updateLikes)
      })
  }
  return (
    <div className="app-wrapper">
      <main>
        <ThoughtsForm
          newThought={newThought}
          onNewThoughtChange={handleNewThoughtChange}
          handleFormSubmit={handleFormSubmit} />
        <ThoughtsList
          loading={loading}
          thoughtsList={thoughtsList}
          handleLike={handleLike} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
