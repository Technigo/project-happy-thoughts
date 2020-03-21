import React from 'react'
import moment from 'moment'
import { HeartButton } from './HeartButton'
import './thoughtcard.css'

export const ThoughtCard = ({ happyThought, id, onHeartClicked, hearts, createdAt }) => {
  return (
    <article className="thought-card">
      <p className="happy-thought">{happyThought}</p>
      <div className="heart-container">
        <HeartButton
          id={id}
          onHeartClicked={onHeartClicked}
          hearts={hearts} />
        <p className="likes-counter">
          x {hearts}
        </p>
      </div>
      <div className="timestamp">
        {moment(createdAt).fromNow()}
      </div>
    </article>
  )
}