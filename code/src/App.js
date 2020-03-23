import React, { useState, useEffect } from 'react'
import { HappyThoughts } from "./HappyThoughts"
import { PostThoughts } from "./PostThoughts"

export const App = () => {

  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  return (
    <div>
      <PostThoughts />
      {thoughts.map((thought) => (
        <HappyThoughts
          message={thought.message}
          hearts={thought.hearts}
          date={thought.createdAt}
          key={thought._id}
        />
      ))
      }
    </div>
  )
}
