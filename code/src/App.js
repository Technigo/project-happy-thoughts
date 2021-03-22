import React, { useState, useEffect} from 'react'
import moment from 'moment'

import { GET_API, POST_API } from './reusables/urls'

export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchList()
  }, []);

  const fetchList = () => {
      fetch(GET_API)
        .then(res => res.json())
        .then(thoughts => setMessageList(thoughts))
        .catch(error => console.error(error))
    }

  const onNewMessageChange = (e) => {
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

    fetch(POST_API, options)
      .then(res => res.json())
      .then(newThoughts => setMessageList([...messageList, newThoughts]))
      .catch(error => console.error(error))
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='newMessage'>New message</label>
            <input
              id='newMessage'
              type='text'
              value={newMessage}
              onChange={onNewMessageChange}
            />
            <button type='submit'>Post message</button>
          
        </form>


        {messageList.map(thoughts => (
          <div key={thoughts._id}>
            <h4>{thoughts.message}</h4>
            <p>{moment(thoughts.createdAt).fromNow()}</p>
            </div>
        ))}
      </div>
  )
}

