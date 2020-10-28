import React from "react"
import moment from "moment" 

import "../css/thoughtsList.css"

export const ThoughtsList = ( { thoughtsList } ) => {

  return (
    <div>
      {
        thoughtsList.map(thought => (
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