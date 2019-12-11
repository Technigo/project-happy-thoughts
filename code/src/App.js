import React, { useEffect, useState } from 'react'
import { HappyForm } from './HappyForm.js'
import { HappyPosts } from './HappyPosts.js'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const onFormSubmit = message => {
    setPostedMessage(message)
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
    
      <HappyForm onFormSubmit={onFormSubmit} />

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