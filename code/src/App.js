import React, { useState, useEffect } from 'react'

import { HAPPY_THOUGHTS_URL, LIKE_THOUGHT_URL } from './reusable/urls'

import SendThought from './components/SendThought'
import ThoughtsList from './components/ThoughtsList'
import ErrorPopup from './components/ErrorPopup'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [newThought, setNewThought] = useState('')
  const [error, setError] = useState(false)
  
  useEffect(() => {
    fetchThoughtsList()
  }, [])

  //GET
  const fetchThoughtsList = () => {
    fetch(HAPPY_THOUGHTS_URL)
      .then(response => response.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(err => console.error(err))
  }

  const onNewThoughtChange = (e) => {
    setNewThought(e.target.value)
  }

  //POST: 
  const handleFormSubmit = (e) => {
  e.preventDefault()

  const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
  }

  fetch(HAPPY_THOUGHTS_URL, options)
    .then(response => {
      //console.log('actual ok value', response.ok)
      console.log(response) //take away before sending it in
      console.dir(response) //take away before sending it in
      if (!response.ok) {
        setError(true)
        throw new Error ('Ups, something went wrong') //prints error message in Console for the use case: unspecified backend error
      } else { 
        setNewThought('') //clears textarea on submit
        return response.json()
      }
    })
    .then(recievedThought => setThoughtsList([recievedThought, ...thoughtsList]))
    .catch(err => console.error(err))
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
      .catch(err => console.error(err))
  }

  return (
    <>
      <SendThought 
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ThoughtsList 
        thoughtsList={thoughtsList}
        handleHeartsIncrease={handleHeartsIncrease}  
      />
      {error && <ErrorPopup setError={setError}/>}
    </>
  )
}
