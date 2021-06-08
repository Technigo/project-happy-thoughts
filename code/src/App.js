import React, { useState, useEffect} from 'react'

import { API_URL, HEART_URL } from './reusables/urls'

import Form from './components/Form'
import MessageList from './components/MessageList'
import Header from './components/Header'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  const [characters, setCharacters] = useState(messageNew.length)

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
      setCharacters(messageNew.length)
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
    setMessageNew('')
  }

  return (
    <>
      <Header />

      <main className="main">
        <Form 
          onFormSubmit={handleFormSubmit}
          messageNew={messageNew}
          onMessageNewChange={handleMessageNewChange}
          characters={characters}
        />
        <MessageList 
          messageList={messageList}
          handleHeartClick={handleHeartClick}
        />
      </main>

    </>

    )
   
    
}
