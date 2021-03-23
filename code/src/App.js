import React, { useState, useEffect } from 'react'

import MessageBoard from './components/MessageBoard'
import MessageForm from './components/MessageForm'

import { API_URL } from './reusable/urls'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
    useEffect(() => {
    fetchThoughts()
  }, [thoughts]);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setThoughts(data)
      })
    }
  return (
    <div>
      <MessageForm 
        thoughts={thoughts}
        setThoughts={setThoughts} 
      />
      <MessageBoard 
        thoughts={thoughts}
        setThoughts={setThoughts}
      />
    </div>
  )
}
