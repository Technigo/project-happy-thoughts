import React, { useEffect, useState } from 'react'
import { API_URL, LIKES_URL } from './utils/urls'
import ThoughtForm from './components/ThoughtForm'
import ThoughtItem from './components/ThoughtItem'
import LoadingItem from './components/LoadingItem'

export const App = () => {

  const [thoughts, setThoughts] = useState ([])
  const [newThought, setNewThought] = useState ('')
  const [newName, setNewName] = useState ('')
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    fetchThoughts()
  }, [])

  // The first fetch request to fetch and display the 20 most current messages
  const fetchThoughts =() => {
    setLoading(true)
    fetch (API_URL)
    .then ((res) => res.json ())
    .then ((data) => setThoughts(data))
    .finally (() => setLoading(false))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault ()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought, name: newName }),
    }

    fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => {
      fetchThoughts()
      setNewThought("") // This clears the textarea for a new input
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
      {loading &&<LoadingItem/>} {/* Conditionally renders loading only when loading happens*/}
      <h1>A Happy-Thoughts Place</h1>
        <ThoughtForm
        onFormSubmit = {handleFormSubmit}
        newThought = {newThought}
        setNewThought = {setNewThought}
        newName = {newName}
        setNewName = {setNewName}/>
      
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
