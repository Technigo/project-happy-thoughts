import React from 'react'
import { Heart } from './Heart'

// LISTING THE THOUGHTS
export const ListThoughts = (props) => (
  <div className="thoughts-wrapper">
    {props.thoughts.map((thought) => (
      <div className="thought" key={thought._id}>
        <div className="message">{thought.message}</div>
        <div className="likes"><button type="button" className="heart-button"><Heart /></button>x {thought.hearts}</div>
      </div>
    ))}
  </div>
)