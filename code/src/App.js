import React, { useEffect, useState } from 'react'

import API_URL from "./utils/urls"
import Thought from "./components/Thought"
import ThoughtForm from "./components/ThoughtForm"
import Loader from "./components/Loader"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
      .catch(err => (console.log(err)))

    setLoading(false)
  }

  return (
    <>
      <ThoughtForm
        thoughts={thoughts}
        setThoughts={setThoughts}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      {loading && <Loader />}
      {loading === false &&
        thoughts.map(thought => (
          <Thought
            key={thought._id}
            thought={thought}
          />
        ))
      }
    </>
  )
}
