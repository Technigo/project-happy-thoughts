import React, { useState } from 'react'

import ThoughtsForm from "./components/ThoughtsForm"
import ThoughtsList from "./components/ThoughtsList"

import { API_URL } from "./reusable/urls"

let page = 0

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState("")
  const [userName, setUserName] = useState()
  const [hasMoreMessages, setHasMoreMessages] = useState(true)

  const fetchMessageList = () => {
    fetch(API_URL(page))
      .then(res => res.json())
      .then(messages => { 
        setMessageList([...messageList, ...messages.thoughts])
        if (page * 5 >= messages.amountOfThoughts) {
          setHasMoreMessages(false)
        }
      })
      page ++
  }

  const handleUserName = (event) => {
    setUserName(event.target.value)
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
      body: JSON.stringify({ message: messageNew, userName: userName })
    }
    fetch(API_URL(null), options)
    .then(res => res.json())
    .then(recievedMessage => {
      if (recievedMessage.error) {
        alert(recievedMessage.error)
      } else {
        setMessageList([recievedMessage, ...messageList])
      }
    })
    setMessageNew("")
    setUserName("")
  }

  return (
    <div className="form-container">
      <ThoughtsForm 
        userName={userName}
        onUserName={handleUserName}
        messageNew={messageNew}
        onMessageNewChange={handleMessageNewChange}
        onFormSubmit={handleFormSubmit}
      />
      <ThoughtsList 
        messageList={messageList} 
        fetchMessageList={fetchMessageList}
        hasMoreMessages={hasMoreMessages}
      />
    </div>
  )
}
