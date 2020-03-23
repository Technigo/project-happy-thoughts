import React from 'react'
import Moment from 'react-moment'
import { LikeButton } from './LikeButton'

export const Thought = ({ id, message, hearts, date, apiUrl }) => {

  return (
    <section className="thought-card">
      <h2>{message}</h2>
      <LikeButton hearts={hearts} id={id} apiUrl={apiUrl} />
      <Moment className="timestamp" fromNow>{date}</Moment>
    </section>
  )
}