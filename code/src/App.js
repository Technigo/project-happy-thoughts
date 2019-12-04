import React, {useEffect, useState} from 'react'
import { HappyThought } from './HappyThought'
import { HappyForm } from './HappyForm'
import "App.css"


export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect (() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
    .then(res => res.json())
    .then(json => setThoughts(json))
  }, [])

  // const handleFormSubmit = () => {

  //   fetch("https://technigo-thoughts.herokuapp.com/", {
  //     method: "POST",
  //     body: JSON.stringify({ message }),
  //     headers: { "Content-Type": "application/json" }
  // }).catch(err => console.log("error:", err))
  // }

  return (
    <div>
      <HappyForm />
      {thoughts.map(thought => (
        <HappyThought key={thought._id} thought={thought}/>
      ))}
    </div>
  )
}
