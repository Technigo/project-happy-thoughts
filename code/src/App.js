import React, { useState, useEffect } from 'react'

import MyThought from './components/MyThought'
import Form from './components/Form'

import { API_URL } from './reusable/urls'

export const App = () => {
  const [messageList, setMessageList] = useState([]) 
  const [messageNew, setMessageNew] = useState("") // The state that takes the input from our submit button

  useEffect(() => {
    fecthMessageList()
  }, [])

  const fecthMessageList = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(message => setMessageList(message))
    .catch(err => console.error(err))
  }

  const onFormSubmit = (event) => {
    event.preventDefault() // When we are going to post and argument and not only fetch, we need to add one argument next to our API 
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' //This means that our fetch will understand that we will send him a message and it will be in a json format
      },
      body: JSON.stringify({ message: messageNew }) // Anything that we write in the input box will be visible here. In other word, what do we want to send
    } // Det som är i strigify; eftersom messageNew updateras med vår input, vill vi att message delen i vår API ersätter värdet inuti med vår input i MessageNEw. Väldigt enkelt och logisk
    
    fetch(API_URL, options)
    .then(res => res.json())
    .then(receivedMessage => setMessageList([...messageList, receivedMessage])) // If we want to add a new element to array state property we need to create a new array like this
  }

  const AddinHeart = (event) => { // Precis lagt till denna
    event.preventDefault() 
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
    } 
    
    fetch(API_URL, options)
    .then(res => res.json())
    .then(receivedMessage => setMessageList([...messageList, receivedMessage])) 
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        < Form messageNew={messageNew} setMessageNew={setMessageNew} />
      </form>

      
      
      
      {messageList.map(message => (
        <>
        < MyThought message={message}/>
        
        </>
      ))}
    </div>
  )
}
