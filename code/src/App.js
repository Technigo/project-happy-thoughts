import React, { useState, useEffect} from 'react'

import { NewThoughts } from './components/NewThoughts'
import { Messages} from './components/Messages'

export const App = () => {

  const [newMessage, setNewMessage] = useState('')
  const [messageList, setMessageList] = useState([])


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

