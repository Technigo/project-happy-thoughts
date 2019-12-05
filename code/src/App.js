import React, { useState, useEffect } from 'react'
import {HappyThoughts} from './components/HappyThoughts'
import {HappyForm} from './components/HappyForm'

const url = "https://technigo-thoughts.herokuapp.com/"

export const App = () => {
const [thoughts, setThoughts] = useState ([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div>
      <HappyForm />
      {thoughts.map(thought => (
        <HappyThoughts key={thought._id} thought={thought} />
      ))}
    </div>
  )
}
