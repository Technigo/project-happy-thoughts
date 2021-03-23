import React, { useState, useEffect} from 'react'
import moment from 'moment/moment'

import { API_URL } from './reusables/urls'

export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  const [hearts, setHearts] = useState([])
  const [error, setError] = useState('')

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

  const onHeartClick = (event, id) => {
    event.preventDefault()
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }})
    .then(res => res.json())
    .then(receivedHearts => setHearts([receivedHearts, ...hearts]))
  }

  // const isValidMessage = () => {
  //   if (messageNew.length > 4 && messageNew.length < 140) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // const onFormSubmit = (event) => {
  //   event.preventDefault()

  //   if (messageNew.length > 4 && messageNew.length < 140) {
  //   fetch(API_URL, {
  //       method: 'POST', 
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }, 
  //       body: JSON.stringify({ message: messageNew })
  //       })
  //   .then(res => res.json())
  //   .then(receivedMessage => setMessageList([receivedMessage, ...messageList]))
  //   .catch(err => console.error(err))
  //  } else {
  //    alert("Please insert at least 4 and maximum 140 characters")
  //  }
  // }

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
    .then(receivedMessage => setMessageList([receivedMessage, ...messageList]))
    .catch(err => setError(err, 'Please make sure you write at least 4 characters and maximum 140'))
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
          <p>{error}</p>
          <button className="submit-button" type="submit"><span>&#10084;&#65039;</span> Send Happy Thought <span>&#10084;&#65039;</span></button>
        </form>

        {messageList.map(message => (
          <div className="message-container" key={message._id}>
              <h4 className="message">{message.message}</h4>
              <div className="time-hearts-container">
              <div className="likes-container">
                <button onClick={(event) => onHeartClick(event, message._id)} className="heart"><span>&#10084;&#65039;</span></button>
                <p>x {message.hearts}</p>
              </div>
              <p className="time">- {moment(message.createdAt).fromNow()}</p>
              </div>
          </div>
        ))}

      </main>
  
      )
   
    
}
