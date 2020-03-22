import React, { useState, useEffect } from 'react'


export const ThoughtsList = () => {
  const [thoughts, setThoughts] = useState([]) 

  const apiURL = 'https://technigo-thoughts.herokuapp.com/'

  useEffect(()  => {
    
    fetch(apiURL)
      .then(res => res.json())
      // .then(json => console.log(json))
      .then(json => setThoughts(json))
      
  }, [])

  return (
    <div className="thoughts-container">
      {thoughts.map((thought) => (

        <article className="thought" key={thought._id}>

          <div className="message-id">ID: {thought._id}</div>
          <div className="message-text">{thought.message}</div>
          <div className="message-likes">Likes: {thought.hearts}</div>
          <div className="message-date">Created at: {thought.createdAt}</div>

        </article>
      ))}
    </div>
  )
}