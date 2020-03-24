import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Heart } from './Heart'
import { LikeButton } from './LikeButton'
// import { Thought } from './Thought'


import './thoughts_style.css'


export const ThoughtsList = () => {
  // URL to API as const:
  const apiURL = 'https://technigo-thoughts.herokuapp.com/'
  const [thoughts, setThoughts] = useState([]) 
  
  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(()  => {
    
    fetch(apiURL)
      .then(response => response.json())
      // .then(json => console.log(json))
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




  // Putting this in a own Component, Thought.js?

  // List all posts from API:
  return (
    <div className="thoughts-container">
      {thoughts.map((thought) => (
        <article className="thought-card" key={thought._id}>
          <div className="message-id">ID: {thought._id}</div>
          <div className="message-text">{thought.message}</div>
          {/* <div className="message-likes"><Heart /> x {thought.hearts}</div> */}
          <div className="message-likes"><LikeButton id={thought._id} onThoughtLiked={onThoughtLiked} /> x {thought.hearts} </div>
          <div className="message-time">{moment(thought.createdAt).fromNow()}</div>
        </article>

       

      ))}

    </div>
  )
}



