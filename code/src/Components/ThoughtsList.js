import React, { useState, useEffect } from 'react'
import moment from 'moment'
import "./thoughtslist.css"

export const ThoughtsList = () => {
  // Good practice to put URLs in constants
  const THOUGHTS_URL = "https://technigo-thoughts.herokuapp.com/"
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    //Ask the server for the thoughts using a GET request
    fetch(THOUGHTS_URL)
      .then((res) => {
        // GET the JSON of the response body
        return res.json()
      })
      .then(data => {
        // Set the state based on the response
        setThoughts(data)
      })
  }, [])

  return (

    <div className="thoughts-list">
      {
        // Add a section for each message returned by the backend
        thoughts.map(thought => (
          <p className="thought-message" key={thought._id}>
            {thought.message}
            <span className="thought-time">
              {moment(thought.createdAt).fromNow()}
            </span>
            <div className="heart">
              {thought.hearts}
            </div>
          </p>
        ))
      }
    </div>
  )
}
