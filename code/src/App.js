import React, { useState, useEffect } from 'react'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div>
      {thoughts.map(thought => (
        <p key={thought._id}>{thought.message}</p>
      ))}

    </div>
  )
}
