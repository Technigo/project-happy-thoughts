import React, { useEffect, useState } from 'react'
import { API_URL, LIKES_URL } from './utils/urls'
import ThoughtForm from './components/ThoughtForm'
import ThoughtItem from './components/ThoughtItem'

export const App = () => {

  const [thoughts, setThoughts] = useState ([])
  const [newThought, setNewThought] = useState ('')
 

  useEffect(()=> {
    fetchThoughts()
  }, [])

  const fetchThoughts =() => {
    fetch (API_URL)
    .then ((res) => res.json ())
    .then ((data) => setThoughts(data))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault ()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => {
      fetchThoughts()
    })
  }

  const handleLikesIncrease = (thoughtId) => {
    
    const options = {
      method: 'POST'
    }
      fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {

        fetchThoughts()
      })
    }

  return (
    <div className="body">
      <h1>A Happy-Thoughts Place</h1>
        <ThoughtForm
        onFormSubmit = {handleFormSubmit}
        newThought = {newThought}
        setNewThought = {setNewThought}/>
      
      {thoughts.map(thought => (

       <ThoughtItem 
       key={thought._id}
       thought = {thought}
       onLikesIncrease = {handleLikesIncrease}/>
      ) 
      )}
    </div>
  )
}
