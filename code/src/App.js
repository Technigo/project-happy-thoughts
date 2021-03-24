import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL, LIKE_URL } from './reusable/urls'
import { Form } from './components/Form'


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
    .then((receivedMessage) => setMessageList([...messageList, receivedMessage]))
  }

  const onLikesIncrease = (id) => {
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
      {/* <form className='form-container' onSubmit={onFormSubmit}> */}
        <Form  messageNew={messageNew} setMessageNew={setMessageNew} onFormSubmit={handleFormSubmit}/>
        {/* <button className='button' type="submit">❤️️ Send happy thoughts! ❤️️</button> */}
      {/* </form> */}
      <div>
      {messageList.map(thought => (
        <div className='message-container' key={thought._id}>
            <h4>{thought.message}</h4>
            <div className='heart-date-container'>
              <div>
                <button onClick={() => onLikesIncrease(thought._id)}>heart</button>
                <p>{thought.hearts}</p>
              </div>
              <p className="date">- {moment(thought.createdAt).fromNow()}</p>
            </div>
        </div>
        )
        )}
      </div>
    </div>
  )
}
