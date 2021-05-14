import React, { useState, useEffect } from 'react'

import Form from './components/Form'
import Message from './components/Message'
import { API_URL, APIHEARTS_URL } from './components/Urls'

export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => { 
    fetch(API_URL)
      .then(response => response.json())
      .then(messages => setMessageList(messages))
      .catch(error => error)
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: newMessage})
  }

  const handleSubmitForm = (event) => {  /* This function posts a new msg from the form to server */
    event.preventDefault()

    fetch(API_URL, options)
    .then(response => response.json())
    .then(receivedMessage => {
      setMessageList([...messageList, receivedMessage])
      fetchMessageList()
      setNewMessage('')
    })
  }
 
  const handleNewMessage = (event) => {
      setNewMessage(event.target.value)
  }

  const handleAddHeart = (id) => { /* When clicking on a heart, send post request to server */  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    fetch(APIHEARTS_URL(id), options)
    .then(response => response.json())
    .then(receivedMessage => {
      const updatedMessageList = messageList.map(message => {
        if (message._id === receivedMessage._id) {
          message.hearts += 1
        }
        return message
      }) 
      setMessageList(updatedMessageList)
    })
    .catch(error => error)
  }


  return (
    <div>
      <Form 
        newMessage={newMessage}
        onNewMessage={handleNewMessage}
        onSubmitForm={handleSubmitForm}
      />
      
      <Message 
        messageList={messageList}
        onAddHeart={handleAddHeart}
      />
     
    </div>
  )


}
