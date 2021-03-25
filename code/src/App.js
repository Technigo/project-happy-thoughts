//Global dependencies
import React, { useEffect, useState } from 'react'
import moment from 'moment'

//Local dependencies
import { API_URL, POST_URL, POST_HEART_URL } from './constants/urls'

import { Form } from './components/Form'
import { List } from './components/List'

export const App = () => {


//constants & functions
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

    fetch(POST_URL, options)
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

    // const onCatchError = (error) => {

    // }

    fetch(POST_HEART_URL(messageID), options)
    .then (response => response.json())
    .then (()=> fetchMessageList())
    .catch(error => console.error(error))
  }

//mounting
  return (
    <div className="content">

      <Form 
        messageNew = {messageNew}
        onFormSubmit = {handleFormSubmit}
        onMessageNewChange = {handleMessageNewChange}
      />

      < List 
        messageList = {messageList}
        onLikesIncrease = {handleLikesIncrease}
      />
      
    </div>
  )
}
 