import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { HAPPY_THOUGHTS_URL } from './reusable/Urls'

import SendThought from './components/SendThought'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [newThought, setNewThought] = useState('')
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchThoughtsList()
  }, [])

  //GET request here:
  const fetchThoughtsList = () => {
    fetch(HAPPY_THOUGHTS_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(err => console.error(err))
  }

  const onNewThoughtChange = (e) => {
    setNewThought(e.target.value)
  }

  const onUserNameChange = (e) => {
    setUsername(e.target.value)
  }
  //POST request here: 
  const onFormSubmit = (e) => {
    e.preventDefault()

    const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ message: newThought, username: username })
      }

    fetch(HAPPY_THOUGHTS_URL, options)
      .then(res => res.json())
      .then(recievedThought => setThoughtsList([...thoughtsList, recievedThought]))
      .then(() => {
        window.location.reload();
      })
  }

//need the type="submit" on button if we want the button to execute something. The event is attached to the form itself though. <form onSubmit={onFormSubmit}>
  return (
    <div>
      <SendThought 
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange}
        onFormSubmit={onFormSubmit}
        onUserNameChange={onUserNameChange}
      />
      {thoughtsList.map(sentmessage => (
        <div key={sentmessage._id} className="sent-messages">
          <h4>{sentmessage.message}</h4>
          <p className="message-created">- {moment(sentmessage.createdAt).fromNow()}</p>
        </div>
        ))}
    </div>
  )
}