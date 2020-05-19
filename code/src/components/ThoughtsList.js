import React from 'react'
import moment from 'moment'
import { HeartButton } from './HeartButton'
import './thoughtslist.css'
import { Comments } from './Comments'

export const ThoughtsList = ({ thoughts, onHeartClicked }) => {

  return (
    <>
      {thoughts.map((thought) => (
        <article key={thought._id} className="thought-card">
          <div className="thought-wrapper">
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
          </div>
          <div className="comments-container">
            <Comments id={thought._id} />
          </div>
        </article>
      ))}
    </>
  )
}