import React, { useState, useEffect } from 'react'



export const App = () => {

  const [messageList, setMessageList] = useState([])

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


  return (
    <div>
      {messageList.map(message => (
       <div key={message._id} className='message'>  
         <h3>{message.message}</h3>
         <p>Posted: {new Date(message.createdAt).toLocaleDateString()} at {new Date(message.createdAt).toLocaleTimeString()}  </p>
       </div>
      ))}
     
    </div>
  )


}
