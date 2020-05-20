import React, { useState, useEffect } from 'react'
import { MessageList } from './MessageList'
import { MessageInput } from './MessageInput'
import './app.css'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')
  const MESSAGES_URL = "https://jihyeon-happy-thoughts-api.herokuapp.com/GET"

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        const filteredData = data.filter(item => {
          return item.message
        })
        setThoughts(filteredData)
      })
  }, [postedMessage])

  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  const onLiked = thoughtId => {
    console.log("Logging in the App.js", thoughtId)
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div className="app-container">
      <MessageInput className="message-input" onFormSubmit={onFormSubmit} />
      {thoughts.map(thought => (
        <MessageList className="message-list" key={thought._id} thought={thought} onLiked={onLiked} />
      ))}
    </div>
  )
}
