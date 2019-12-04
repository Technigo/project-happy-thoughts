import React from 'react'
import Thought from './Thought.js'

const ThoughtsList = ({ thoughts, setReloadThoughts }) => {

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
            time={thought.createdAt}
            setReloadThoughts={setReloadThoughts}
          />
        )
      })}
    </section>
  )
}

export default ThoughtsList