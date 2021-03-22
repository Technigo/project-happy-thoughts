import React, { useState, useEffect} from 'react'
import moment from 'moment/moment'

import { API_URL } from './reusables/urls'

export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
      fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
    }

  const onMessageNewChange = (event) => {
      setMessageNew(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    fetch(API_URL, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ message: messageNew })
        })
    .then(res => res.json())
    .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
   }

    return (
      <main className="main">
        
        <form className="form" onSubmit={onFormSubmit}>
          <label htmlFor="newMessage">What's making you happy right now?</label>
          <input
            id="newMessage"
            type="text"
            value={messageNew}
            onChange={onMessageNewChange}
          />
          <button className="submit-button" type="submit">❤️ Send Happy Thought ❤️</button>
        </form>

        {messageList.map(message => (
          <div className="message-container" key={message._id}>
              <h4>{message.message}</h4>
              <p className="time">- {moment(message.createdAt).fromNow()}</p>
          </div>
        ))}

      </main>
  
      )
   
    
}
