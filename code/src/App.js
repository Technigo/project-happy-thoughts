import React, { useState, useEffect } from 'react'
import { Thought } from './Thought'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])
  return (

    <div>
      {thoughts.map(json =>
        <div key={json._id}>{json.message} {json.hearts} {json.createdAt}</div>
      )}
    </div>

  )
}