//Global dependencies
import React, { useEffect, useState } from 'react'

//Local dependencies
import { API_URL, POST_HEART_URL } from './Constants/urls'

//Components
import { MessageForm } from './components/MessageForm'
import { MessageList } from './components/MessageList'

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
    .catch(error => console.error(error))
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
      .catch(error => console.error(error))
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
    .catch(error => console.error(error))
  }


// Mounting
  return (
    <div className="content">

      <MessageForm 
        messageNew = {messageNew}
        onFormSubmit = {handleFormSubmit}
        onMessageNewChange = {handleMessageNewChange}
      />

      < MessageList 
        messageList = {messageList}
        handleLikesIncrease = {handleLikesIncrease}
      />
      
    </div>
  )
}
 