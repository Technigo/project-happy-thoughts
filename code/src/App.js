import React, { useState } from 'react'

import MessageBoard from './components/MessageBoard'
import MessageForm from './components/MessageForm'



export const App = () => {
  const [thoughts, setThoughts] = useState([])
  
  return (
    <div className="content-container">
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
