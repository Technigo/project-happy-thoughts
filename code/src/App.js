import React, { useState } from 'react'

import { NewMessageForm } from './components/NewMessageForm'
import { Messages} from './components/Messages'

export const App = () => {

  const [newMessage, setNewMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  const handleMessageList = (newPost) => {
    setMessageList([...messageList, newPost])
  }


  return (
    <div className='main'>
      <NewMessageForm
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        messageList={messageList}
        setMessageList={setMessageList}
        handleMessageList={handleMessageList}
      />
    
      <Messages
        messageList={messageList}
        setMessageList={setMessageList}
      />
    </div>

  )
}

