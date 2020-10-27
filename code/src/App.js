import React, { useEffect, useState } from 'react'
import { HappyForm } from "./components/HappyForm"
import { HappyThoughts } from "./components/HappyThoughts"
import "./components/app.css"

const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])


  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  const onLiked = thoughtId => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
      .then(() => {
        fetch(url)
          .then(res => res.json())
          .then(json => setThoughts(json))
      })
  }

  return (
    <main>
      <section className="thoughts-container">
        <HappyForm onFormSubmit={onFormSubmit} />
        {thoughts.map(thought => (
          <HappyThoughts key={thought._id} thought={thought} onLiked={onLiked} />
        ))}
      </section>
    </main>
  )
}
