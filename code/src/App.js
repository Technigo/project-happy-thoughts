import React, { useState, useEffect } from 'react'

import { NewMessageForm } from './components/NewMessageForm'
import { Messages} from './components/Messages'

import { API_URL, LIKE_API } from './reusables/urls'

export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchList()
  }, []);

  const fetchList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
  }

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newMessage })
      };
  
      fetch(API_URL, options)
        .then(res => res.json())
        .then(() => fetchList())
        setNewMessage('')
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  const handleIncreaseLikes = (id) => {

    fetch(LIKE_API(id), options)
    .then(res => res.json())
    .then(newLike => {
      const updatedMessageList = messageList.map(message => {
        if (message._id === newLike._id) {
          message.hearts += 1;
        }
        return message
        }) 
        setMessageList(updatedMessageList)
    })
  }

  return (
    <div className='main'>

      <NewMessageForm
        newMessage={newMessage}
        onSubmit={handleSubmit}
        onNewMessageChange={handleNewMessageChange}
      />
    
      <Messages
        messageList={messageList}
        handleIncreaseLikes={handleIncreaseLikes}
      />
    </div>
  )
}

