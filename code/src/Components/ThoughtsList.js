import React from 'react'
import Thought from './Thought.js'

const ThoughtsList = ({ thoughts }) => {

  return (
    <section>
      <h2>Happy thoughts</h2>
      {thoughts.map((thought, index) => {
        return(
          <Thought 
            key={index}
            id={thought._id}
            text={thought.message}
            likes={thought.hearts} 
            time={'30 seconds ago'}
          />
        )
      })}
    </section>
  )
}

export default ThoughtsList