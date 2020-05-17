import React from 'react'
import { Thought } from './Thought'
import { SortingBar } from './SortingBar'

export const ThoughtsContainer = ({ thoughts, apiUrl }) => {

  return (
    <section className="thoughts-container">

      <SortingBar />

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