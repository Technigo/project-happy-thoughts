import React, { useState } from 'react'

import { API_URL } from './reusable/urls'
import { MessageList } from './components/MessageList'
import { Form } from './components/Form'


export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState ('')

  const onFormSubmit = (event) => {
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
    .then((newThought) => setMessageList([...messageList, newThought]))
  }

  return (
    <div className='app-container'>
      <form className='form-container' onSubmit={onFormSubmit}>
        <Form  messageNew={messageNew} setMessageNew={setMessageNew} />
        <button className='button' type="submit">Send happy thoughts!</button>
      </form>
      <div>
        <MessageList messageList={messageList} setMessageList={setMessageList} />
      </div>
    </div>
  )
}
