import React, { useState, useEffect } from 'react'

// URLS
import { HAPPY_THOUGHTS_URL, LIKE_THOUGHT_URL } from './reusable/urls'

// Components
import SendThought from './components/SendThought'
import ThoughtsList from './components/ThoughtsList'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetchThoughtsList()
  }, [])

  //GET request here:
  const fetchThoughtsList = () => {
    fetch(HAPPY_THOUGHTS_URL)
      .then(results => results.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(error => console.error(error))
  }

  const onNewThoughtChange = (e) => {
    setNewThought(e.target.value)
  }

  //Take away window location reload nedan om jag märker att sidan refreshar i alla fall****** !!! TODO
  //POST requests here: 
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
      .then(results => results.json())
      // .then(recievedThought => setThoughtsList([...thoughtsList, recievedThought]))
      // Refetch data from the server & update local state at the same time.
      .then(() => fetchThoughtsList())
/*       .then(() => {
        window.location.reload()
      }) */
      .catch(error => console.error(error))
  } 

  const handleHeartsIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(LIKE_THOUGHT_URL(id), options)
      .then( res => res.json())
      .then(() => fetchThoughtsList())
      .catch(err => console.error(err))
  }

//need the type="submit" on button if we want the button to execute something. The event is attached to the form itself though. <form onSubmit={onFormSubmit}>
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
    </>
  )
}

