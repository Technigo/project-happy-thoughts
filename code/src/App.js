import React, { useEffect, useState } from 'react'

import { HappyForm } from "./components/HappyForm"
import { HappyThoughts } from "./components/HappyThoughts"
import "./components/app.css"

//const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
const url = "https://katarinas-happy-api.herokuapp.com/thoughts"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
    setLoading(false)
  }, [postedMessage, loading])


  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  const onLiked = thoughtId => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <main>
      <h1><span className="heart" role="img" aria-label="purple-heart">{"🤍"}</span>HAPPY THOUGHTS<span className="heart" role="img" aria-label="purple-heart">{"🤍"}</span></h1>
      <section className="thoughts-container">
        <HappyForm onFormSubmit={onFormSubmit} />
        {loading && <div className="loader" />}
        {thoughts.map(thought => (
          <HappyThoughts key={thought._id} thought={thought} onLiked={onLiked} />
        ))}
      </section>
    </main>
  )
}
