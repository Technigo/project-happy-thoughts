//Global dependencies
import React, { useEffect, useState } from 'react'

//Local dependencies
import { API_URL, POST_HEART_URL } from './constants/urls'

//Components
import { MessageForm } from './Components/MessageForm'
import { MessageList } from './Components/MessageList'

export const App = () => {


//Constants & Functions
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then (messages => setMessageList(messages))
   }

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setMessageNew('')

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: messageNew})
    }

    fetch(API_URL, options)
      .then (response => response.json())
      .then (()=> fetchMessageList())
  }

  const handleLikesIncrease = (messageID) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(POST_HEART_URL(messageID), options)
    .then (response => response.json())
    .then (()=> fetchMessageList())
  }


// Mounting
  return (

    <main className="content">

      <MessageForm 
        messageNew = {messageNew}
        onFormSubmit = {handleFormSubmit}
        onMessageNewChange = {handleMessageNewChange}
      />

      < MessageList 
        messageList = {messageList}
        handleLikesIncrease = {handleLikesIncrease}
      />
      
    </main>
  )
}
 