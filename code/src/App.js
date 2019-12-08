import React, { useEffect, useState } from 'react'
import { HappyForm } from './HappyForm.js'
import { HappyPosts } from './HappyPosts.js'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        setThoughts(json)
        setLoading(false)
      })
  }, [])

  const handleFormSubmit = message => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: { 'Content-Type': 'application/json' }
    }) 
      .catch(() => {alert("Don't worry, be happy! :D")
    })
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
      <h1>
        <span role="img" aria-label="smiley">😃</span> Happy Thoughts <span role="img" aria-label="smiley">😃</span>
      </h1>

      {loading && <h4>Don't worry, be happy! <span role="img" aria-label="smiley">😄</span></h4>}
    
      <HappyForm onFormSubmit={handleFormSubmit} />
    
      {thoughts.map(thought => (
        <HappyPosts
          key={thought._id} 
          thought={thought}
          hearts={thought.hearts} 
          onThoughtLiked={onThoughtLiked}
        />
      ))}
    </div>
  )
}