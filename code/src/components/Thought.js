import React from 'react'

export const Thought = ({ id, message, hearts, date }) => {
  return (
    <section key={id} className="thought-card">
      <h2>{message}</h2>
      <span>{hearts}</span>
      <p>{date}</p>
    </section>
  )
}