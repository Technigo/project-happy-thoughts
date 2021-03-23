//Global dependencies
import React, { useEffect, useState } from 'react'
import moment from 'moment'

//Local dependencies
import { API_URL, POST_URL } from './Constants/urls'

export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')


//call a function each time somthing changes.
//Second argument: nothing if you want the function to run everytime something chnages, and when its mounted [] if only whne its mounted. Or if when some specific state property changes: type that property in the array [stateproperty ex currentStep]
//if when its unmounted only then write return function

  useEffect(() => {
  }, [])

  const fetchMessageList = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then (messages => setMessageList(messages))
    .catch(error => console.error(error))
  }

  fetchMessageList()

  const onMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: messageNew})
    }

    fetch(POST_URL, options)
      .then (response => response.json())
      .then(recievedMessage => setMessageList([...messageList, recievedMessage]))
  }

  return (

    <div className="content">

      <form onSubmit={onFormSubmit} className="form">
        <label>
          <h3>What's making you happy right now?</h3>
          <input
            type="text"
            value={messageNew}
            onChange={onMessageNewChange}
          />
        </label>
        <button type="submit">❤ Send Happy Thought! ❤</button>
      </form>


      {messageList.map(message => ( 
        <div key={message._id} className="thought-card">
          <h4>
            {message.message}
          </h4>
          <p>
            <span role="img" aria-label="heart emoji">💟</span> x {message.hearts}
          </p>
          <p>
            {moment(message.createdAt).fromNow()}
          </p>       
        </div>
      ))}
    </div>
  )
}
 