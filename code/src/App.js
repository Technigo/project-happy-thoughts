import React, { useEffect, useState } from 'react'

import { API_URL, POST_HEART_URL, DELETE_THOUGHT_URL } from './constants/urls.js'
import { MessageForm } from './Components/MessageForm'
import { MessageList } from './Components/MessageList'
import { Header } from './Components/Header'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  const [loading, setLoading] = useState(false)

  
  const fetchMessageList = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then (messages => setMessageList(messages))
    .catch(error => console.error(error))
    .finally(() => {
      setLoading(false)
    })    
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
      .then (() => {
        fetchMessageList(API_URL)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    setLoading(true)
    fetchMessageList()
  }, [])


  const handleDeleteThought = (messageID) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(DELETE_THOUGHT_URL(messageID), options)
      .then (response => response.json())
      .then (() => fetchMessageList())
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

  return (
    <main className="content">
      <Header/>
      <MessageForm 
        messageNew = {messageNew}
        onFormSubmit = {handleFormSubmit}
        onMessageNewChange = {handleMessageNewChange}
      />
      {loading? 
        <>
          <h3>Loading thoughts...</h3>
        </>
        :
        <MessageList 
          messageList = {messageList}
          handleLikesIncrease = {handleLikesIncrease}
          onDeleteThought = {handleDeleteThought}
        />   
      }
       
    </main>
  )
}
 