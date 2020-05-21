import React, { useState, useEffect } from 'react'
import moment from 'moment'
import "./thoughtslist.css"

export const ThoughtsList = () => {
  const THOUGHTS_URL = "https://happy-thoughts-api-deployment.herokuapp.com/thoughts"
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    //Ask the server for the thoughts using a GET request
    fetch(THOUGHTS_URL)
      .then((res) => {
        // GET the JSON of the response body. All info is retreived here.
        return res.json()
      })
      .then(data => {
        // Set the state based on the response
        setThoughts(data)
      })
  }, [])

  const onLiked = (thoughtId) => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  const handleClick = (thoughtId) => {
    //console.log("id", thoughtId)
    fetch(`https://happy-thoughts-api-deployment.herokuapp.com/${thoughtId}/like`, {
      method: "PUT",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => onLiked(thoughtId))
  }
  return (

    <div className="happy-thought">
      {
        // Add a section for each message returned by the backend
        // Map through "thoughts" array and print out each thought
        thoughts.map(thought => {
          console.log('thought?', thought)
          return (
            <article className="thought-message" key={thought._id}>
              <p className="message-p">
                {thought.message}
              </p>
              <div className="thought-footer">
                <div className="likes">
                  <button onClick={() => handleClick(thought._id)}
                    className={
                      thought.hearts > 5 ? "superLiked" : thought.hearts > 0 ? "liked" : "notLiked"
                    }
                  >
                    <span role="img" aria-label="Heart">
                      ❤️
                      </span>
                  </button>
                  <p className="like-count">x{thought.hearts}</p>
                </div>
                <p>
                  {moment(thought.createdAt).fromNow()}
                </p>
              </div>
            </article>
          )
        }
        )
      }
    </div>
  )
}
