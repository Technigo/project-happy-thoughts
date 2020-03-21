import React from 'react'
import { HeartButton } from './HeartButton'

export const ThoughtCard = ({ happyThought }) => {
  return (
    <article className="thought-card">
      <p className="happy-thought">{happyThought}</p>
      <div className="heart-container">
        <HeartButton />
      </div>
    </article>
  )
}