import React, { useEffect, useState } from 'react'

import API_URL from "./utils/urls"
import Thought from "./components/Thought"
import ThoughtForm from "./components/ThoughtForm"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
      .catch(err => (console.log(err)))
  }

  return (
    <>
      <ThoughtForm
        thoughts={thoughts}
        setThoughts={setThoughts}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      <Thought thoughts={thoughts} />
    </>
  )
}
