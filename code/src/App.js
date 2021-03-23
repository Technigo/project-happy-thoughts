import React, { useState } from 'react'

import MessageBoard from './components/MessageBoard'
import MessageForm from './components/MessageForm'
import Loading from './components/Loading'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(false)
  
  return (
    <div className="content-container">
      <MessageForm 
        thoughts={thoughts}
        setThoughts={setThoughts} 
      />
      {loading && <Loading />}

      <MessageBoard 
        thoughts={thoughts}
        setThoughts={setThoughts}
        setLoading={setLoading}
      />
    </div>
  )
}
