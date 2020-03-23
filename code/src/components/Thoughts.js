import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Heart } from './Heart'
import './thoughts_style.css'


export const ThoughtsList = () => {
  const apiURL = 'https://technigo-thoughts.herokuapp.com/'
  const [thoughts, setThoughts] = useState([]) 
  // ULR API as const:
  



  // Checking API via Fetch to setThoughts and then map the info:
  useEffect(()  => {
    
    fetch(apiURL)
      .then(response => response.json())
      // .then(json => console.log(json))

      .then(json => setThoughts(json))    
      
  }, [])

  return (
    <div className="thoughts-container">
      {thoughts.map((thought) => (

        <article className="thought-card" key={thought._id}>
          <div className="message-id">ID: {thought._id}</div>
          <div className="message-text">{thought.message}</div>
          <div className="message-likes"><Heart /> x {thought.hearts}</div>
          {/* <div className="message-date">{thought.createdAt}</div> */}
          <div className="message-time">{moment(thought.createdAt).fromNow()}</div>
        </article>
      ))}
    </div>
  )
}