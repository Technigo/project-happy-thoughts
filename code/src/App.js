import React, { useState, useEffect} from 'react'

import { API_URL, HEART_URL } from './reusables/urls'

import Form from './components/Form'
import MessageList from './components/MessageList'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  const [error, setError] = useState('')

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

  const handleHeartClick = (id) => {
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(HEART_URL(id), options)
    .then(res => res.json())
    .then(() => fetchMessageList())
    .catch(err => console.group.error(err))
  }


  // const isValidMessage = () => {
  //   if (messageNew.length > 4 && messageNew.length < 140) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

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
    .then(res => res.json())
    .then(() => fetchMessageList())
    .catch(() => setError('Please make sure you write at least 4 characters and maximum 140'))
  }

  return (
    <main className="main">
      
      <Form 
        onFormSubmit={handleFormSubmit}
        messageNew={messageNew}
        onMessageNewChange={handleMessageNewChange}
        error={error}
      />
      <MessageList 
        messageList={messageList}
        handleHeartClick={handleHeartClick}
      />

    </main>

    )
   
    
}
