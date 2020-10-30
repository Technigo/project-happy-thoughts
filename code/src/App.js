import React, { useEffect, useState } from 'react'
import { HappyThought } from 'components/HappyThought.js'
import { HappyForm } from 'components/HappyForm.js'

const url = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json.slice(0,10))) // slice is minimizing the array to 10
  }, [postedMessage])

  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  const onLiked = thoughtId => {
    const updatedThoughts = thoughts.map(thought => {
      if(thought._id === thoughtId) {
        thought.hearts += 1 
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <main>
      <h1 class="happy-thoughts-title">Share Happy Thoughts!</h1>
      <HappyForm onFormSubmit={onFormSubmit} />
      <section className="thoughts-section">
        {thoughts.map(thought => (
          <HappyThought 
            id={thought._id} 
            thought={thought.message} 
            onLiked={onLiked} 
            heart={thought.hearts} 
            createdAt={thought.createdAt}
          />
        ))}
      </section>
    </main>
  )
}
