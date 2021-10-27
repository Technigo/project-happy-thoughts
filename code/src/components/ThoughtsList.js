import React, { useEffect } from "react"
import moment from "moment"

import { API_URL } from "reusables/urls"

const ThoughtsList = ({ thoughts, setThoughts }) => {
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [setThoughts])

  return (
    <div>
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button>&hearts; {thought.hearts}</button>
          <p className="date">
            - Created at: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ThoughtsList
