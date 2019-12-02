import React, { useState, useEffect } from 'react'

export const Thoughts = () => {

  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/", { method: 'GET' })
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div>
      <ul>
        {thoughts.map(thought => (
          <li key={thought._id}>{thought.message}</li>
        ))}
      </ul>
    </div>

  )
}