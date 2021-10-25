import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL } from './utils/urls'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  //const [heart, setHeart] = useState()

  useEffect (() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setThoughts(data))
  }, [])

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]))
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={onFormSubmit}>
          <label htmlFor="newThought">What's making you happy right now?</label>
          <textarea 
            id="newThought" 
            type="text"
            maxLength="140"
            value={newThought} 
            onChange={(e) => setNewThought(e.target.value)}
          />
          <button className="send-button" type="submit">
            <span className="heart" role="img" aria-label="heart">❤️  </span>  
              Send Happy Thought  
            <span className="heart" role="img" aria-label="heart">  ❤️</span>
          </button>
        </form>
      </div>
      
      {thoughts.map((thought) => (
        <div className="thought-container" key={thought._id}>
          <p className="thought-message">{thought.message}</p>
          <div className="thought-info">
            <div className="thought-heart">
              <button className="heart-button"><span className="heart" role="img" aria-label="heart">❤️</span></button>
              <span> x {thought.hearts}</span>
            </div>
            <p className="date"> {moment(thought.createdAt).fromNow()} </p>
          </div>
        </div>
      ))}
    </div>
  )
}
