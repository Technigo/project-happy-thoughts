import React, { useState, useEffect } from 'react'
import { Emoji } from "./Emoji"
import './HappyThoughts.css'
import moment from 'moment'


export const HappyThoughts = () => {
  const THOUGHTS_URL = "https://technigo-thoughts.herokuapp.com/"
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])


  return (
    <div>
      {thoughts.map(thought => (
        <article className="thoughts-container">
          <h2 className="message" key={thought._id}>
            {thought.message}</h2>
          <p>
            <Emoji symbol="❤️" />
            x {thought.hearts}
          </p>
          <p>
            <span className="message-time">
              {moment(thought.createdAt).fromNow()}
            </span>
          </p>
        </article>
      ))
      }
    </div>
  )
}
