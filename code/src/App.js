import React, { useEffect, useState } from "react"

import ThoughtsInput from "components/ThoughtsInput"
import ThoughtsList from "components/ThoughtsList"

import { API_URL, LIKES_URL } from "reusables/urls"

//These state properties stores and keeps track of current state  in thought list and thought input
export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")

  // This UseEffect hook in vorder to make a get req to get all thought when the app starts and is mounted
  useEffect(() => {
    getThoughts()
  }, [])

  const getThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleInputSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        getThoughts()
      })
  }

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        getThoughts()
      })
  }

  return (
    <div>
      <ThoughtsInput
        handleInputSubmit={handleInputSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
        onNewThoughtChange={onNewThoughtChange}
      />
      {thoughts.map((thoughts) => (
        <ThoughtsList
          key={thoughts._id}
          thoughts={thoughts}
          setThoughts={setThoughts}
          handleLikesIncrease={handleLikesIncrease}
          onNewThoughtChange={onNewThoughtChange}
        />
      ))}
    </div>
  )
}
