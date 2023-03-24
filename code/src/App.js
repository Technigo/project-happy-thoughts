/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { HappyList } from 'components/HappyList';
import { HappyThoughtsForm } from './components/HappyThoughtsForm'

const fetchAPI = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

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
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json)
      .then(() => fetchThoughts())
      .finally(() => setNewHappyThoughts(''))
  }

  return (
    <>
      <HappyThoughtsForm
        newThought={newHappyThoughts}
        onNewThoughtChange={handleNewHappyThought}
        onFormSubmit={onFormSubmit} />
      <HappyList
        loading={loading}
        happyThoughts={happyThoughts}
        setHappyThoughts={setHappyThoughts} />
    </>
  );
}
