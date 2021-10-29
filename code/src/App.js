import React, { useEffect, useState } from 'react'
import ThoughtForm from './components/ThoughtForm'
import ThoughtItem from './components/ThoughtItem'
import Header from './components/Header'

import { API_URL, LIKES_URL } from './utils/urls'

export const App = () => {
const [thoughts, setThoughts] = useState([])
const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetchThoughts()
  }, []) 

  const fetchThoughts = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setThoughts(data))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => {

      fetchThoughts()
      
    })
  }

  const handleLikesChange = (thoughtId) => {
    const options = {
      method: 'POST'
    }


    fetch(
      LIKES_URL(thoughtId), 
    options
    )    
    .then((res) => res.json())
    .then((data) => {

      fetchThoughts()

    })
    }

  return (
    <>
      <Header 
        heading='Send me some Happy Thoughts!'
        backgroundColor='#F3B1AF'
      />
      <section className='content-area'>
        <ThoughtForm
          onFormSubmit={handleFormSubmit}
          newThought={newThought}  
          setNewThought={setNewThought}
          letterCounter={newThought.length}
        />

      {thoughts.map((thought) => (
        <ThoughtItem 
            key={thought._id}
            thought={thought}
            onLikesChange={handleLikesChange} 
        />

        ))}
      </section>
    </>
)

}
