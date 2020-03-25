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

    <div className="happy-thought">
      {
        // Add a section for each message returned by the backend
        thoughts.map(thought => (
          <article className="thought-message">
            <p key={thought._id}>
              {thought.message}
            </p>
            <button>
              <span role="img" aria-label="Heart">
                ❤️
                </span>
            </button>
             x {thought.hearts}
            <p>
              {moment(thought.createdAt).fromNow()}
            </p>
          </article>
        ))
      }
    </div>
  )
}
