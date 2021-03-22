import React, { useState, useEffect } from 'react' //if we import from the same package it makes sense to write it like this, in same line. 
import moment from 'moment'
//Name / default export
//Lower dash library rule, if you export it as a named export you need to import it with exactly the same name
import { HAPPY_THOUGHTS_URL } from './reusable/Urls'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
//takes 2 arguments ---> 1.what we should call 2. when we should re-trigger the use effect: mounted / changes / unmounted
//IF I want it to be triggered every time we do not need to specify the 2nd argument (line 16 between }, )
//empty [] as second argument causes useEffect to ONLY listen to when the Component is mounted, and not to other changes***
  useEffect(() => {
//    console.log('hej')
    fetchMessageList()
  }, [])

  //GET request here:
  const fetchMessageList = () => {
    fetch(HAPPY_THOUGHTS_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages)) //update the state property only! :) 
      .catch(err => console.error(err))
  }

  const onMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }
  //just prevents the browser from updating all the time
  //POST request here: 
  const onFormSubmit = (event) => {
    event.preventDefault()
//    console.log('Form submitted:', messageNew)

    const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ text: messageNew })
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
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">Write new message!</label>
          <input
            id="newMessage"
            type="text"
            value={messageNew}
            onChange={onMessageNewChange}
            />
            <button type="submit"></button>
      </form>
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.text}</h4>
          <p className="date">- {moment(message.created).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}
