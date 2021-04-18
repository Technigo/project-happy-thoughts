import React, { useState, useEffect } from 'react'

import ThoughtsForm from "./components/ThoughtsForm"
import ThoughtsList from "./components/ThoughtsList"

import { API_URL, LIKES_URL } from "./reusable/urls"

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState("")

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: messageNew })
    }
    fetch(API_URL, options)
    .then(res => res.json())
    .then(recievedMessage => setMessageList([recievedMessage, ...messageList])) //Switched the position of recievedMessage and messageList to make the new messages come first in the list
    setMessageNew("")
  }

  const handleLikesIncrease = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }
    fetch(LIKES_URL(id), options)
      .then(res => res.json())
      .then(recievedMessage => {
        const updatedMessageList = messageList.map(message => {
          if (message._id === recievedMessage._id) {
            message.hearts += 1
          }
          return message
        })
        setMessageList(updatedMessageList)
      })
  }

  return (
    <div className="form-container">
      <ThoughtsForm 
      messageNew={messageNew}
      onMessageNewChange={handleMessageNewChange}
      onFormSubmit={handleFormSubmit}
      />
      <ThoughtsList 
      messageList={messageList} 
      handleLikesIncrease={handleLikesIncrease}
      />
    </div>
  )
}
