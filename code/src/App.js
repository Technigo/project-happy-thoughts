import React, { useEffect, useState } from "react"

import ThoughtForm from "components/ThoughtForm"
import ThoughtItem from "components/ThoughtItem"

import { API_URL, LIKES_URL } from "utils/urls"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  // to keep track of the new thoughts beeing typed in the input field
  const [newThought, setNewThought] = useState("")

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    // Send a POST request with a JSON body
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
        //v1
        // setThoughts([data, ...thoughts])

        //v2
        fetchThoughts()
      })
  }
  const handleLikeIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        // v1 increase likes only

        // const updatedToughts = thoughts.map((item) => {
        //   if (item._id === data._id) {
        //     item.hearts += 1
        //     return item
        //   } else {
        //     return item
        //   }
        // })
        // setThoughts(updatedToughts)

        fetchThoughts()
      })
  }

  return (
    <div>
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikeIncrease={handleLikeIncrease}
        />
      ))}
    </div>
  )
}
