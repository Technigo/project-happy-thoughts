import React from 'react'
import Moment from 'react-moment'

export const Thought = ({ message, hearts, date }) => {

  return (
    <section className="thought-card">
      <h2>{message}</h2>
      <span className="likes">{hearts}</span>
      <Moment className="timestamp" fromNow>{date}</Moment>
    </section>
  )
}