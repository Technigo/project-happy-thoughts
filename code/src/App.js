/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import React, { useState, useEffect } from 'react';
import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThought, setNewThought] = useState('')

  /* Fetches the most recent happy thoughts from the API */
  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-kukr2tatlq-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts();
  }, [])

  /* Function that passes new text-input-value to setNewThought */
  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  /* Function that posts new thought to API and updates setThoughtList state */
  const postNewThought = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newThought })
    };

    fetch('https://project-happy-thoughts-api-kukr2tatlq-lz.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((data) => {
        setThoughtList((prevList) => [data, ...prevList]);
      })
  }

  /* Function that prevents default submit behaviour, calls postNewThought function
  and clears textarea. Activated onClick */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    postNewThought();
    setNewThought('')
  };

  /* Function that posts new likes to API */
  const handleLike = (_id) => {
    fetch(`https://project-happy-thoughts-api-kukr2tatlq-lz.a.run.app/thoughts/${_id}/like`, { method: 'POST' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const updatedThoughtList = thoughtList.map((thought) => {
          if (thought._id === data._id) {
            // eslint-disable-next-line prefer-object-spread
            return Object.assign({}, thought, { likes: thought.likes + 1 });
          }
          return thought;
        });

        setThoughtList(updatedThoughtList);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <main>
        <ThoughtForm
          onFormSubmit={handleFormSubmit}
          newThought={newThought}
          onNewThoughtChange={handleNewThoughtChange} />
        <ThoughtList
          loading={loading}
          thoughtList={thoughtList}
          handleLike={handleLike} />
      </main>
    </div>
  );
}