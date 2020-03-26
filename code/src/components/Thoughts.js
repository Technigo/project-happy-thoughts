import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { LikeButton } from './LikeButton'
import './thoughts_style.css'

// List all posts from API:
export const ThoughtsList = () => {
  // URL to API as const:
  const apiURL = 'https://technigo-thoughts.herokuapp.com/'
  const [thoughts, setThoughts] = useState([]) 
  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(()  => {
    fetch(apiURL)
      .then(response => response.json())
      .then(json => setThoughts(json))      
  }, [])

  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  // List all posts from API. Might put this in an own Component.
  return (
    <div className="thoughts-container">
      {thoughts.map((thought) => (
        <article className="thought-card" key={thought._id}>
          <div className="message-text">{thought.message}</div>
          <div className="message-likes"><LikeButton id={thought._id} onThoughtLiked={onThoughtLiked} hearts={thought.hearts} /> <span>x {thought.hearts}</span></div>
          <div className="message-time">{moment(thought.createdAt).fromNow()}</div>
        </article>
      ))}
    </div>
  )
}



