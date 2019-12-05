import React, { useEffect, useState } from 'react'
import { HappyForm } from './HappyForm.js'
import { HappyPosts } from './HappyPosts.js'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        setThoughts(json)
      })
  }, [])

  const handleFormSubmit = message => {
    if(message.length>=5 && message.length<=140) {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: { 'Content-Type': 'application/json' }
    })
    } else {
      setError(true)
    }
  }

  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if(thought._id === likedThoughtId) {
        thought.hearts +=1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  } 


  return (
    <div className="main-container">
      <h1>😃 Happy Thoughts 😃</h1>
    
      <HappyForm onFormSubmit={handleFormSubmit} error={error}/>
    
      {thoughts.map(thought => (
        <HappyPosts 
          key={thought._id} 
          thought={thought}
          onThoughtLiked={onThoughtLiked}
        />
      ))}
    </div>
  )
}

