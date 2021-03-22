import React, { useState, useEffect} from 'react'

import { NewThoughts } from './components/NewThoughts'
import { Messages} from './components/Messages'

export const App = () => {

  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  return (
    <>
    <NewThoughts
      newMessage={newMessage}
      setNewMessage={setNewMessage}
    />
    
    <Messages
      messageList={messageList}
      setMessageList={setMessageList}
    />
    </>

  )
}

