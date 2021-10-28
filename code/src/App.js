import React, { useEffect, useState } from "react"

import ThoughtsInput from "components/ThoughtsInput"
import ThoughtsList from "components/ThoughtsList"

import { API_URL, LIKES_URL } from "reusables/urls"

//These state properties stores and keeps track of current state  in thoughtlist and thoughtinput
export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")

  // const onNewThoughtChange = (event) => {
  //   setNewThought(event.target.value)
  // }

  // This UseEffect hook in order to make a get req to get all thought when the app starts and is mounted
  useEffect(() => {
    fetchThoughts()
  }, [])

  // console.log("new thoughts", thoughts)

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }

  const handleFormSubmit = (event) => {
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
        fetchThoughts()
      })
  }

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts()
      })
  }

  return (
    <div>
      <ThoughtsInput
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <ThoughtsList
          key={thought._id}
          thought={thought}
          newThought={newThought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  )
}
