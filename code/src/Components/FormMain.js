import React, { useEffect, useState } from "react"
import { formatRelative } from "date-fns";


import FormInput from "Components/FormInput"
import FormList from "Components/FormList"


//stores + tracks current state
const FormMain = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [counter, setCounterValue] = useState(0)
  const [load, setLoad] = useState(false)

    const LIKES_URL = (thoughtId) => // API likes
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

  // UseEffect hook gets all thoughts 
  useEffect(() => {
    fetchThoughts()
  }, [])

  //Fetches the API and gives back the data through the state set
  const fetchThoughts = () => {
    setLoad(true)
    fetch("//happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoad(false))
  }

  //POST-request to the API while submiting the input-form
  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch("//happy-thoughts-technigo.herokuapp.com/thoughts", options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts()
        setNewThought("")
      })
  }

  //Likes
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
        
      {load}
      <FormInput
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
        counter={counter}
        setCounterValue={setCounterValue}
      />

      {thoughts.map((thought) => (
        <FormList
          key={thought._id}
          thought={thought}
          newThought={newThought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  )
}

export default FormMain