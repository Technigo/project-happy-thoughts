import React, { useEffect, useState } from "react"


import FormInput from "Components/FormInput"
import FormList from "Components/FormList"


//stores + tracks current state
const FormMain = () => {
  const [thoughts, setThoughts] = useState([]) //Messages from others
  const [load, setLoad] = useState(false) //
  const [newThought, setNewThought] = useState("")
  const [counter, setCounterValue] = useState(0)

  const LIKES_URL = (thoughtId) => // API likes
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

  // UseEffect hook that tells what the components needs to do something after render
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

  //Sending a POST-request to the API while submiting the input-form
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

  //Sending a POST-request for the Likes
  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts()
      })
      .catch((error) => error)
  }

//Sends and presents values of FormInput and FormList trough props
  return ( 
    <div>
        
      {load}
      <FormInput
        setCounterValue={setCounterValue} newThought={newThought} onFormSubmit={handleFormSubmit} setNewThought={setNewThought} counter={counter}
      />

      {thoughts.map((thought) => (
        <FormList key={thought._id} newThought={newThought} thought={thought} onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  )
}

export default FormMain