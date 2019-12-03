import React, { useState, useEffect } from 'react'
import { Heart } from './Heart'
import './thoughts.css'

export const Thoughts = () => {

  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/", { method: 'GET' })
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div className="thoughts-wrapper">
      {thoughts.map(thought => (
        <div className="thought" key={thought._id}>
          <div className="message">{thought.message}</div>
          <div className="likes"><button type="button" className="heart-button"><Heart /></button>x {thought.hearts}</div>
        </div>
      ))}
    </div>
  )
}