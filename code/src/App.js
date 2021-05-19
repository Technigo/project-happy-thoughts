import React, { useState, useEffect } from 'react'

import ThoughtsForm from "./components/ThoughtsForm"
import ThoughtsList from "./components/ThoughtsList"

import { API_URL } from "./reusable/urls"

let page = 0

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState("")
  const [userName, setUserName] = useState(undefined) //Fix this
  const [hasMoreMessages, setHasMoreMessages] = useState(true)

  // useEffect(() => {
  //   fetchMessageList()
  // }, [])

  const fetchMessageList = () => {
    fetch(API_URL(page))
      .then(res => res.json())
      .then(messages => { 
        setMessageList(messages.thoughts)
        if (messages.amountOfThoughts < page * 1) {
          setHasMoreMessages(false)
        }
      })
      page ++
      console.log(page)
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
    fetch(API_URL, options)
    .then(res => res.json())
    .then(recievedMessage => {
      if (recievedMessage.error) {
        alert(recievedMessage.error)
      } else {
        setMessageList([recievedMessage, ...messageList])
      }
    })
    // .then(recievedMessage => setMessageList([recievedMessage, ...messageList])) //Switched the position of recievedMessage and messageList to make the new messages come first in the list
    setMessageNew("")
    setUserName("")
  }

  // const handleLikesIncrease = (id) => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   }
  //   fetch(LIKES_URL(id), options)
  //     .then(res => res.json())
  //     // .then(recievedMessage => {
  //     //   const updatedMessageList = messageList.filter(message => (message._id !== id))
  //     //   setMessageList([recievedMessage.updatedThought, ...updatedMessageList].sort((a, b) => a.createdAt - b.createdAt))
  //     // })
  //     .then(receivedMessage => (setHearts(receivedMessage.updatedThought.hearts)))
  // }

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
      // handleLikesIncrease={handleLikesIncrease}
      />
    </div>
  )
}
