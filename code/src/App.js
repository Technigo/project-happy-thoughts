import React, { useState, useEffect } from 'react'

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
      .catch(error => console.log(error))
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: newMessage})
  }

  const onSubmitForm = (event) => {  /* This function posts a new msg from the form to server */
    event.preventDefault()

    fetch(API_URL, options)
    .then(response => response.json())
    .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
    .catch(error => console.log(error))
  }
 
  const onNewMessage = (event) => {
      setNewMessage(event.target.value)
  }

  const onAddHeart = (id) => { /* When clicking on a heart, send post request to server */  
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
    .catch(error => console.log(error))
  }


  return (
    <div>

      <form onSubmit={onSubmitForm}>
        <label htmlFor='newMessage'>Your message:</label>
        <input
          id='newMessage'
          type='text'
          value={newMessage}
          onChange={onNewMessage}
        />
        <button type='submit'>SEND</button>
      </form>

      {messageList.map(message => (
        <div key={message._id} className='message'>  
          <h3>{message.message}</h3>
          <p>Posted: {new Date(message.createdAt).toLocaleDateString()} at {new Date(message.createdAt).toLocaleTimeString()}  </p>
          <button onClick={() => onAddHeart(message._id)}>❤</button> <p> {message.hearts} web developers loved this</p>
       </div>
      ))}
     
    </div>
  )


}
