import React from 'react'
import Moment from 'react-moment'
import { LikeButton } from './LikeButton'

export const Thought = ({ message, hearts, date }) => {

  return (
    <section className="thought-card">
      <h2>{message}</h2>
      <LikeButton hearts={hearts} />
      <Moment className="timestamp" fromNow>{date}</Moment>
    </section>
  )
}