import React, { useEffect, useState } from 'react'

import { API_URL } from "./utils/urls"
import ThoughtForm from "./components/ThoughtForm"
import ThoughtList from "./components/ThoughtList"
import Loader from "./components/Loader"
import LikeCounter from './components/LikeCounter'

let page = 0
let hasMoreMessages = true

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  // const [hasMoreMessages, setHasMoreMessages] = useState(true)
  const [username, setUsername] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [likeCounter, setLikeCounter] = useState(0)

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL(page))
      .then(res => res.json())
      .then(data => {
        setThoughts(data.thoughts)
        // setThoughts([data.thoughts, ...thoughts])
        console.log(`${page} / ${data.amountOfThoughts}`)
        // if (data.amountOfThoughts < (page * 1) + 1) {
        if (page * 1 > data.amountOfThoughts - 2) {
          // setHasMoreMessages(false)
          hasMoreMessages = false
        }
      })
    page++
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
        <ThoughtList
          thoughts={thoughts}
          fetchThoughts={fetchThoughts}
          likeCounter={likeCounter}
          setLikeCounter={setLikeCounter}
          hasMoreMessages={hasMoreMessages}
        />}
      <LikeCounter likeCounter={likeCounter} />
    </>
  )
}
