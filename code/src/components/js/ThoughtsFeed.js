import React from "react"
import moment from "moment" 

import "../css/thoughtsFeed.css"

export const ThoughtsFeed = ( { thoughtsFeed } ) => {

  return (
    <div>
      {
        thoughtsFeed.map(thought => (
          <p className="thought-text" key={thought._id}>
            {thought.message}
            <span className="post-time">
              {moment(thought.createdAt).fromNow()}
            </span>
          </p>
        ))
      }
    </div>
  )
}