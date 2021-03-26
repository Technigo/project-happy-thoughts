import React, { useState, useEffect } from 'react'


import MessageForm from './components/MessageForm'
import HappyMessageList from './components/HappyMessageList'

import { API_URL } from './reusable/urls'
import { HEART_URL } from './reusable/urls'

export const App = () => {
  const [happyList, setHappyList] = useState([])   //state properties
  const [newMessage, setNewMessage] = useState ('')
  
  useEffect(()=> {
    fetchHappyThoughtList()
  }, []) //only for when the component is mounted. add empty string.Sending request to fetch funct

  const fetchHappyThoughtList = () => {
    fetch (API_URL)
    .then (res => res.json())
    .then (messages => setHappyList(messages))
    .catch(err => console.error(err))
  }

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage })
    }

    fetch(API_URL, options)
    .then(res => res.json())
    .then(() => fetchHappyThoughtList())     
  }

  const handleHeartsIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(HEART_URL(id), options)
      .then(res => res.json())
      .then (receivedMessage => {
        const updatedHappyList = happyList.map(message => {
          if (message._id === receivedMessage._id) {
            message.hearts += 1
         } 
         return message 
       })
       setHappyList(updatedHappyList)

      })
    .catch(err => console.log(err))

  }

    return (
      <div>
        <MessageForm  
          newMessage={newMessage}
          onNewMessageChange={handleNewMessageChange}
          onFormSubmit={handleFormSubmit}
        />
        <HappyMessageList 
          happyList={happyList}
          handleHeartsIncrease={handleHeartsIncrease}
        />
      </div>
    )
}
