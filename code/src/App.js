/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { HappyList } from 'components/HappyList';
import { HappyThoughtsForm } from './components/HappyThoughtsForm'

const fetchAPI = 'https://project-happy-thoughts-api-t7sozngaeq-uc.a.run.app/thoughts'

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([])
  const [loading, setLoading] = useState(false)
  const [newHappyThoughts, setNewHappyThoughts] = useState('')

  const fetchThoughts = () => {
    setLoading(true)
    fetch(fetchAPI)
      .then((res) => res.json())
      .then((data) => setHappyThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts()
  }, [])

  const handleNewHappyThought = (event) => {
    setNewHappyThoughts(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newHappyThoughts
      })
    }
    fetch(fetchAPI, options)
      .then((res) => res.json)
      .then(() => fetchThoughts())
      .finally(() => setNewHappyThoughts(''))
  }

  const handleLikeChange = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://project-happy-thoughts-api-t7sozngaeq-uc.a.run.app/thoughts/${id}/like`, options)
      .then((res) => res.json())
      .then(console.log('Like'))
      .then((error) => console.error(error))
      .finally(() => fetchThoughts(''));
  }
  return (
    <div className="app">
      <HappyThoughtsForm
        newThought={newHappyThoughts}
        onNewThoughtChange={handleNewHappyThought}
        onFormSubmit={onFormSubmit} />
      <HappyList
        loading={loading}
        happyThoughts={happyThoughts}
        setHappyThoughts={setHappyThoughts}
        handleLikeChange={handleLikeChange} />
    </div>
  );
}
