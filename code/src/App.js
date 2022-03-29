import React, { useState, useEffect } from 'react'

import ThoughtForm from './components/ThoughtForm'
import ThoughtItem from './components/ThoughtItem'

import { API_URL, LIKES_URL } from './utils/urls'

export const App = () => {
  const [thoughts, setThoughts] = useState([]) // Empty array because later it will be non empty array
  const [newThought, setNewThought] = useState ('')

  // Calling useEffect to fetch all thoughts after the component gets mounted
  useEffect (() => {
    fetchThoughts()
  }, [])
  
  const fetchThoughts = () => {
    fetch(API_URL) // Fetch request when component is mounted to get the data from the API
      .then((res) => res.json())  // Unpack json                  
      .then((data) => setThoughts(data)) // Save the data in the state
  }

  const handleFormSubmit = (event) => {
    event.preventDefault() // Because we dont want the submission of the form to refresh the page
  
    const options = {
      method: 'POST',
      headers: { // For the API to know what type of data we will send
        'Content-Type': 'application/json', // Type is json
      },
      body: JSON.stringify({ message: newThought }) // "message" is the key of the object and value is the "my happy thought"
    }

    fetch(API_URL, options) // Send request to add a new thought
      .then(res => res.json())
      .then(newThought => {

        fetchThoughts()
        setNewThought('') // Clears input field after submitting thought
      }) 
  }

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    }

    fetch(LIKES_URL(thoughtId), options)
      .then(res => res.json())
      .then(data => {
        
        fetchThoughts()      
      })
  }
 
  return ( // Since state is updated, component renders some JS6. After JS6 rendered first time then useEffect gets triggered with console log
    <div className="main">
      <p>&hearts; Happiness is only real when shared &hearts;</p>
      <fieldset>
        <ThoughtForm 
          onFormSubmit={handleFormSubmit}
          newThought={newThought}
          setNewThought={setNewThought} 
        />

        {thoughts.map(thought => (
          <ThoughtItem 
            key={thought._id} 
            thought={thought} 
            onLikesIncrease={handleLikesIncrease}
          />
      ))}
      </fieldset>
    </div>
  )
}
