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
      Happy Thoughts
      <ul>
        {thoughts.map(json =>
          <li key={json._id}>{json.message}</li>)}
      </ul>
    </div>
  )
}