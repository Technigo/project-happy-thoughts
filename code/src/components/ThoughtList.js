import React, { useState, useEffect } from "react"
import moment from "moment"

import "../styling/ThoughtList.css"

export const ThoughtList = () => {

  const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [thoughts, setThoughts] = useState([])

useEffect(() => {

  fetch(THOUGHTS_URL)
  .then((res) => {
    return res.json()
  })
  .then(data => {
    const filteredData = data.filter(thought => {
      return thought.message
    })
    filteredData.reverse()
    setThoughts(data.slice(0, 20))
  })
}, [])

  return (
    <div>
      {thoughts.map(thought => (
          <p className="message" key={thought._id}>
            {thought.message}
            <span className="timestamp">
              {moment(thought.createdAt).fromNow()}
            </span>
          </p>
        ))
      }
    </div>
  )
}