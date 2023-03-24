/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThought, setNewThought] = useState('')

  /* Fetches the most recent happy thoughts from the API */
  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
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
      body: JSON.stringify({ message: newThought })
    };

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((data) => {
        setThoughtList((prevList) => [data, ...prevList]);
      });
  }

  /* Function that prevents default submit behaviour, calls postNewThought function
  and clears textarea. Activated onClick */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    postNewThought();
    setNewThought('')
  };

  /* Function that posts new likes to API - CURRENTLY NOT WORKING
  const handleLikes = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type:': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, options)
      .then((res) => res.json())
      .then((data) => {
        const updatedLikes = thoughtList.map((thought) => {
          if (thought._id === data._id) {
            return {
              ...thought,
              hearts: data.hearts
            };
          }
          return thought;
        });
        setThoughtList(updatedLikes)
      })
      .catch((error) => console.error(error))
  } */

  return (
    <div>
      <Header />
      <main>
        <ThoughtForm
          onFormSubmit={handleFormSubmit}
          newThought={newThought}
          onNewThoughtChange={handleNewThoughtChange} />
        <ThoughtList
          loading={loading}
          thoughtList={thoughtList} />
      </main>
    </div>
  );
}
