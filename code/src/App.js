import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL } from './reusable/urls'
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

  const onFormSubmit = () => {
    // event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageNew })
    }

    fetch(API_URL, options)
    .then((response) => response.json())
    .then((newThought) => setMessageList([...messageList, newThought]))
  }

  return (
    <div className='app-container'>
      <form className='form-container' onSubmit={onFormSubmit}>
        <Form  messageNew={messageNew} setMessageNew={setMessageNew} />
        <button className='button' type="submit">Send happy thoughts!</button>
      </form>
      <div>
      {messageList.map(thought => (
        <div className='message-container' key={thought._id}>
            <h4>{thought.message}</h4>
            <div className='heart-date-container'>
            <p>{thought.hearts}</p>
            <p className="date">- {moment(thought.createdAt).fromNow()}</p>
            </div>
        </div>
        )
        )}
      </div>
    </div>
  )
}
