import React, { useState, useEffect } from 'react'
import moment from 'moment'

import '../styling/MessageList.css'

export const MessageList = () => {

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
    setThoughts(data)
  })
}, [])

  return (
    <div>
      {
        thoughts.map(thought => (
          <p className="message">{thought.message}
            <span className="timestamp">
              {moment(thought.createdAt).fromNow()}
            </span>
          </p>
        ))
      }
    </div>
  )
}