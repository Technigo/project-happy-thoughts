import React, { useState, useEffect } from 'react'

import { HAPPY_THOUGHTS_URL, LIKE_THOUGHT_URL } from './reusable/urls'

import SendThought from './components/SendThought'
import ThoughtsList from './components/ThoughtsList'
import ErrorPopup from './components/ErrorPopup'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [newThought, setNewThought] = useState('')
  const [error, setError] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    fetchThoughtsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //GET
  const fetchThoughtsList = () => {
    fetch(HAPPY_THOUGHTS_URL)
      .then(response => response.json())
      .then(thoughts => {
        setThoughtsList(thoughts)
      })
  }

  const onNewThoughtChange = (e) => {
    setNewThought(e.target.value)
  }

  const onUserNameChange = (e) => {
    setUsername(e.target.value)
  }

  //POST: 
  const handleFormSubmit = (e) => {
  e.preventDefault()

  const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ message: newThought, author: username === '' ? 'Anonymous' : username })
  }

  fetch(HAPPY_THOUGHTS_URL, options)
    .then(response => {
      if (!response.ok) {
        throw new Error ('Ups, something went wrong') //prints error message in Console for the use case: unspecified backend error
      } else { 
        return response.json()
      }
    })
   /*  .then(recievedThought => {
      setThoughtsList([recievedThought, ...thoughtsList]) 
      setUsername(username) // added setUserName(username) here
    }) */
    .then(fetchThoughtsList,
      setNewThought(''),
      setUsername('')
    )
    .catch(() => {
      setError(true)
    })
  }

  const handleHeartsIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(LIKE_THOUGHT_URL(id), options)
      .then(res => res.json())
      .then(() => fetchThoughtsList())
  }

  return (
    <>
      <SendThought 
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange}
        handleFormSubmit={handleFormSubmit}
        onUserNameChange={onUserNameChange}
        username={username}
      />
      <ThoughtsList 
        thoughtsList={thoughtsList}
        handleHeartsIncrease={handleHeartsIncrease}
      />
      {error && <ErrorPopup setError={setError}/>}
    </>
  )
}
