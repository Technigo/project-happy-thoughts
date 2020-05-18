import React from 'react'
import Moment from 'react-moment'
import { LikeButton } from './LikeButton'

const firstCharUppercase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const Thought = ({ thought, apiUrl }) => {

  return (
    <section className="thought-card">
      <h2>{firstCharUppercase(thought.message)}</h2>
      <p className="name">{firstCharUppercase(thought.name)}</p>

      <LikeButton
        hearts={thought.hearts}
        id={thought._id}
        apiUrl={apiUrl} />

      <Moment className="timestamp" fromNow>{thought.createdAt}</Moment>
    </section>
  )
}