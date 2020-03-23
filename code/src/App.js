import React, { useState, useEffect } from 'react'
import { Thought } from 'components/Thought'
import { PostThought } from 'components/PostThought'

import 'css/app.css'

export const App = () => {

  const apiUrl = 'https://technigo-thoughts.herokuapp.com/'
  const [thoughts, setThoughts] = useState([])


  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setThoughts(data))
  }, [])

  return (
    <div className="wrapper">

      <PostThought setThoughts={setThoughts} apiUrl={apiUrl} />

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
    </div>
  )
}
