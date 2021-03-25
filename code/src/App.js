import React, { useState, useEffect } from 'react'

import { API_URL, LIKE_URL } from './reusable/urls'
import { Form } from './components/Form'
import MessageList from './components/MessageList'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState ('')

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then(messages => setMessageList(messages))
    .catch(error => console.error(error))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageNew })
    }

    fetch(API_URL, options)
    .then((response) => response.json())
    .then((receivedMessage) => setMessageList([receivedMessage, ...messageList]))
  }

  const handleLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(LIKE_URL(id), options)
    .then(response => response.json())
    .then(receivedMessage => {
      const updatedMessageList = messageList.map(message => {
        if (message._id === receivedMessage._id) {
        message.hearts +=1;
        }
        return message;
      })
      setMessageList(updatedMessageList)
      }) 
    .catch(error => console.error(error))
    }
    
  return (
    <div className='app-container'>
        <Form  
          messageNew={messageNew} 
          setMessageNew={setMessageNew} 
          onFormSubmit={handleFormSubmit}
          unvalidCharacter='red'
          validCharacter='black'
        />
      <div>
      <MessageList 
          handleLikesIncrease={handleLikesIncrease} 
          messageList={messageList} 
        />
      </div>
    </div>
  )
}
