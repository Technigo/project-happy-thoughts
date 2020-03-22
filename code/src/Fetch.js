import React, { useState, useEffect } from 'react'
import "./fetch.css"

export const Fetch = () => {
  const [thoughts, setThoughts] = useState([])
  const ApiData = ('https://technigo-thoughts.herokuapp.com')

  useEffect(() => {
    fetch(ApiData)
      .then(res => res.json())
      //.then(json => console.log(json))
      .then(json => setThoughts(json)
      
      )}, [])

  return (
    <div className= 'thoughts'>
      {thoughts.map(thought => (
        <div className='thought'>
        <p key={thought.message}>{thought.message}</p>
        </div>
      ))}
    
    </div>
    
  )

}

