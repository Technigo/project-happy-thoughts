import React, { useEffect, useState } from 'react'
import { HappyThoughts } from './HappyThoughts'
import { HappyForm } from './HappyForm'
import { Like } from './Like'

import "./App.css";
import "./HappyThoughts.css";


export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com")
      .then(res => res.json()
        .then(json => setThoughts(json))
      )
  }, [])

  return (
    <div className="mainContainer">
      <HappyForm />
      <div>
        {thoughts.map(thought => (
          <article>
            <h2>{thought.message}.</h2>
            <div className="messageLive">
              <div className="countContainer">
                <button className="likeButton" onClick="">&#10084;&#65039;</button>
                <p className="count">x {thought.hearts}</p>
              </div>
              <p>{thought.createdAt}</p>
            </div>

          </article>
          // <HappyThoughts key={thought._id} />
        ))}
      </div>
    </div>
  )
}
