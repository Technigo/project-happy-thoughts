import React, { useState, useEffect } from 'react'
import { Thought } from 'components/Thought'

import 'css/app.css'

export const App = () => {

  const apiUrl = 'https://technigo-thoughts.herokuapp.com/'
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div className="wrapper">
      <section className="thoughts-container">
        {thoughts.map(thought => (

          <Thought
            key={thought._id}
            message={thought.message}
            hearts={thought.hearts}
            date={thought.createdAt}
          />

        ))}
      </section>
    </div>
  )
}
