import React, { useState, useEffect } from 'react' //if we import from the same package it makes sense to write it like this, in same line. 
import moment from 'moment'
//Name / default export
//Lower dash library rule, if you export it as a named export you need to import it with exactly the same name
import { HAPPY_THOUGHTS_URL } from './reusable/Urls'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [newThought, setNewThought] = useState('')
  const [username, setUsername] = useState('');
//takes 2 arguments ---> 1.what we should call 2. when we should re-trigger the use effect: mounted / changes / unmounted
//IF I want it to be triggered every time we do not need to specify the 2nd argument (line 16 between }, )
//empty [] as second argument causes useEffect to ONLY listen to when the Component is mounted, and not to other changes***

  useEffect(() => {
    fetchMessageList()
  }, [])

  //GET request here:
  const fetchMessageList = () => {
    fetch(HAPPY_THOUGHTS_URL)
      .then(res => res.json())
      .then(data => setMessageList(data)) //update the state property only! :) 
      .catch(err => console.error(err))
  }

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }
  //just prevents the browser from updating all the time
  //POST request here: 
  const onFormSubmit = (event) => {
    event.preventDefault()
//    console.log('Form submitted:', newThought)

    const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ message: newThought, username: username })
      }

    fetch(HAPPY_THOUGHTS_URL, options)
      .then(res => res.json())
      .then(recievedMessage => setMessageList([...messageList, recievedMessage]))
  }

  //no need for the normal arrow function syntax can go boom! direct to message => ()
  //<input/> ----> we add value and onChange to make it controlled. 
  //you need the type="submit" on button if we want the button to execute something. The event is attached to the form itself though. <form onSubmit={onFormSubmit}>
  return (
    <div>
      <form onSubmit={onFormSubmit} className="thoughts-container">
        <label htmlFor="newMessage">What's making you happy right now?</label>
          <textarea
            id="newMessage"
            type="text"
            maxLength="140"
            value={newThought}
            onChange={onNewThoughtChange}>
          </textarea>
          <p className="counter-for-text" style={{ color: newThought.length > 130 ? "red" : "black "}}>
            {140 - newThought.length} characters left
          </p>
          <label className="form-title"> 
            Sent by:
              <input
                type="text"
                maxLength="25"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
          </label>
          <button type="submit">Send Happy Thought</button>
        </form>
        {messageList.map(sentmessage => (
          <div key={sentmessage._id}>
            <h4>{sentmessage.message}</h4>
            <p className="message-created">- {moment(sentmessage.createdAt).fromNow()}</p>
          </div>
        ))}
    </div>
  )
}