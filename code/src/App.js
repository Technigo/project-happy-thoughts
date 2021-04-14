import React, { useState, useEffect } from 'react'

import Form from './components/Form'
import Map from './components/Map'
import Hero from './components/Hero'

import Error from './components/ErrorPage'

import { API_URL, LIKES_URL } from './reusable/urls'

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
  }

  const onInputMessage = (event) => { 
    setMessageNew(event.target.value)
  }

  const onFormSubmit = (event) => { 
    event.preventDefault() 
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ message: messageNew }) 
    } 
    
    fetch(API_URL, options)
    .then(res => res.json())
    .then(() => fecthMessageList()) 
  }

  const onLikesIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
    }
    
    fetch(LIKES_URL(id), options)
    .then(res => res.json())
    .then(() => fecthMessageList()) 
  }
  return (
    <> 
      <Hero />
      <div className="container">
        <div className="container-body">
          < Form 
          messageNew={messageNew} 
          onInputMessage={onInputMessage}
          onFormSubmit={onFormSubmit}
          />
          < Map 
            messageList={messageList}
            onLikesIncrease={onLikesIncrease}
          />
        </div>
      </div>
    </>
  )
}
