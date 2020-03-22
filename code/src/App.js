import React, { useState, useEffect } from 'react'
import { Thoughts } from './Thoughts'
import { MyThought } from './MyThought'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [myThought, setMyThought] = useState([])
  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])
  return (
    <main>
      <div>
        <Thoughts thoughts={thoughts} myThought={myThought} />
      </div>
    </main>

  )
}