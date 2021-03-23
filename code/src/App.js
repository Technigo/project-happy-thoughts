import React, { useState } from 'react'

import { MessageList } from './components/MessageList'
import { MessageForm } from './components/MessageForm'


export const App = () => {
const [message, setMessage] = useState([])

  return (
    <div>
      < MessageForm setMessage={setMessage}/>
      < MessageList message = {message}/>
    </div>
  )
}
