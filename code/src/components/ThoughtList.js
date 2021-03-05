import React, { useState, useEffect } from "react"

import { HappyThought } from "components/HappyThought"

import "../styling/ThoughtList.css"

export const ThoughtList = () => {

  const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [thoughts, setThoughts] = useState([])

useEffect(() => {
  fetchThoughts()
}, [])

const fetchThoughts = () => {
  fetch(THOUGHTS_URL)
  .then((res) => {
    return res.json()
  })
  .then(data => {
    const filteredThoughts = data.filter(thought => {
      return thought !== ''
    })
    setThoughts(filteredThoughts.slice(0, 20))
    filteredThoughts.reverse()
  })
}

const onLiked = thoughtId => {
  const updatedThoughts = thoughts.map(thought => {
    if (thought._id === thoughtId) {
      thought.hearts += 1
    }
    return thought
  })
  setThoughts(updatedThoughts)
}

return (
    <div className="thoughts-container">
      {thoughts.map((thought) => (
        <div className="thoughts">
          <HappyThought 
          key={thought._id}
          thought={thought}
          onLiked={onLiked} />
        </div>
      ))}
      
    </div>
  )
}