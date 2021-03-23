import React, { useState, useEffect } from 'react'



export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const API_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'


  useEffect(() => {
    fetchMessageList()
  }, [])


  const fetchMessageList = () => { 
    fetch(API_URL)
      .then(response => response.json())
      .then(messages => setMessageList(messages))
      .catch(error => console.log(error))
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: newMessage})
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    fetch(API_URL, options)
    .then(response => response.json())
    .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
    .catch(error => console.log(error))
  }
 
  const onNewMessage = (event) => {
      setNewMessage(event.target.value)
  }

  return (
    <div>

      <form onSubmit={onSubmitForm}>
        <label htmlFor='newMessage'>Your message:</label>
        <input
          id='newMessage'
          type='text'
          value={newMessage}
          onChange={onNewMessage}
        />
        <button type='submit'>SEND</button>
      </form>

      {messageList.map(message => (
       <div key={message._id} className='message'>  
         <h3>{message.message}</h3>
         <p>Posted: {new Date(message.createdAt).toLocaleDateString()} at {new Date(message.createdAt).toLocaleTimeString()}  </p>
       </div>
      ))}
     
    </div>
  )


}
