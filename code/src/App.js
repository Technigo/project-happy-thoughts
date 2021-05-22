import React, { useState } from 'react'

import { API_URL } from "./utils/urls"
import ThoughtForm from "./components/ThoughtForm"
import ThoughtList from "./components/ThoughtList"
import LikeCounter from './components/LikeCounter'

let page = 0
let hasMoreMessages = true

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [username, setUsername] = useState("")
  const [likeCounter, setLikeCounter] = useState(0)

  const fetchThoughts = () => {
    fetch(API_URL(page))
      .then(res => res.json())
      .then(data => {
        setThoughts([...thoughts, ...data.thoughts])
        if (page * 10 >= data.amountOfThoughts) {
          hasMoreMessages = false
        } else {
          page++
        }
      })
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

      <ThoughtList
        thoughts={thoughts}
        setThoughts={setThoughts}
        fetchThoughts={fetchThoughts}
        likeCounter={likeCounter}
        setLikeCounter={setLikeCounter}
        hasMoreMessages={hasMoreMessages}
      />
      <LikeCounter likeCounter={likeCounter} />
    </>
  )
}
