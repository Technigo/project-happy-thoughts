import React, { useEffect, useState } from "react"

import ThoughtsInput from "components/ThoughtsInput"
import ThoughtsList from "components/ThoughtsList"
import LoadSpinner from "./components/LoadSpinner"
import Header from "components/Header"

import { API_URL, LIKES_URL } from "reusables/urls"

//stores and keeps track of current state
export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [counter, setCounterValue] = useState(0)
  const [load, setLoad] = useState(false)

  // UseEffect hook to get all thoughts when the app starts and gets mounted
  useEffect(() => {
    fetchThoughts()
  }, [])

  //a function that fetches the API and gives back the data through the state set
  const fetchThoughts = () => {
    setLoad(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoad(false))
  }

  //Function that makes a POST-request to the API when you submit the input-form
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
        setNewThought("")
      })
  }
  // a function that keeps track of the likes by fetching information from the API
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
  // Mounting the components that contains props being passed into here and displays in FE
  return (
    <div>
      <Header />

      {load && <LoadSpinner />}
      <ThoughtsInput
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
        counter={counter}
        setCounterValue={setCounterValue}
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
