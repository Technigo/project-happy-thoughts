import React from 'react'
import moment from 'moment'
import { HeartButton } from './HeartButton'
import './thoughtslist.css'

export const ThoughtsList = ({ thoughts, onHeartClicked }) => {
  return (
    <>
      {thoughts.map((thought) => (
        <article key={thought._id} className="thought-card">
          <p className="happy-thought">{thought.message}</p>
          <div className="heart-container">
            <HeartButton
              id={thought._id}
              onHeartClicked={onHeartClicked}
              hearts={thought.hearts} />
            <p className="likes-counter">x {thought.hearts}</p>
          </div>
          <div className="timestamp">
            <p className="created">{thought.createdBy}</p>
            <p className="created">{moment(thought.createdAt).fromNow()}</p>
          </div>
        </article>
      ))}
    </>
  )
}