import React, { useState } from 'react'
import { Thought } from './Thought'

export const ThoughtsContainer = ({ thoughts, apiUrl }) => {
  return (
    <section className="thoughts-container">

      {thoughts.map(thought => (

        <Thought
          key={thought._id}
          id={thought._id}
          message={thought.message}
          hearts={thought.hearts}
          date={thought.createdAt}
          apiUrl={apiUrl}
        />

      ))}

    </section>
  )
}