import React from 'react'
import { Thought } from './Thought'

export const ThoughtsContainer = ({ thoughts, apiUrl }) => {
  return (
    <section className="thoughts-container">

      {thoughts.map(thought => ( // Maps through thoughts

        <Thought
          key={thought._id}
          thought={thought}
          apiUrl={apiUrl}
        />

      ))}

    </section>
  )
}