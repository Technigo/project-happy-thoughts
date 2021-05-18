import React, { useEffect, useState } from 'react'

import { API_URL } from "./utils/urls"
import Thought from "./components/Thought"
import ThoughtForm from "./components/ThoughtForm"
import Loader from "./components/Loader"
import LikeCounter from './components/LikeCounter'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(true)
  const [likeCounter, setLikeCounter] = useState(0)

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))

    setLoading(false)
  }

  return (
    <>
      <ThoughtForm
        thoughts={thoughts}
        setThoughts={setThoughts}
        newThought={newThought}
        setNewThought={setNewThought}
        username={username}
        setUsername={setUsername}
      />
      {loading && <Loader />}
      {loading === false &&
        thoughts.map(thought => (
          <Thought
            key={thought._id}
            thought={thought}
            likeCounter={likeCounter}
            setLikeCounter={setLikeCounter}
          />
        ))
      }
      <LikeCounter likeCounter={likeCounter} />
    </>
  )
}
