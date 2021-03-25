//Global dependencies
import React, { useEffect, useState } from 'react'
import moment from 'moment'

//Local dependencies
import { API_URL, POST_URL, POST_HEART_URL } from './Constants/urls'

import { Form } from './components/Form'

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


  const onMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }

  const onFormSubmit = (event) => {
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

  const onLikesIncrease = (messageID) => {
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
        onFormSubmit = {onFormSubmit}
        messageNew = {messageNew}
        onMessageNewChange = {onMessageNewChange}
     />

      {messageList.map(message => ( 
        <div key={message._id} className="thought-card">
          <h4>
            {message.message}
          </h4>
          <div className="card-info">
            <div className="likes">
              <button 
                className={`like-button ${message.hearts > 0 ? 'liked' : ''} ${message.hearts > 10 ? 'super-liked' : ''}`}
                onClick={() => onLikesIncrease(message._id)}>
                <span role="img" aria-label="heart emoji">💓</span>
              </button>
              <p>x {message.hearts}</p>
            </div>
            <p className="post-time">
              {moment(message.createdAt).fromNow()}
            </p>
          </div>       
        </div>
      ))}
    </div>
  )
}
 