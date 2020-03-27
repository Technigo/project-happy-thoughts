import React, { useState, useEffect } from 'react'
import moment from 'moment'
import "./thoughtslist.css"

export const ThoughtsList = (props) => {
  const { message, hearts, createdAt, _id } = props
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

  const onLiked = (thoughtId) => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => onLiked(_id))
  }
  return (

    <div className="happy-thought">
      {
        // Add a section for each message returned by the backend
        // Add onClick function to Button and add POST fetch inside that function
        thoughts.map(thought => {
          console.log('thought?', thought)
          return (
            <article className="thought-message">
              <p key={thought._id}>
                {thought.message}
              </p>
              <div className="thought-footer">
                <button onClick={handleClick}>
                  <span role="img" aria-label="Heart">
                    ❤️
                      </span>
                </button>
                <p>x {thought.hearts}</p>
                < p >
                  {moment(thought.createdAt).fromNow()}
                </p>
              </div>
            </article >
          )
        }
        )
      }
    </div >
  )
}
