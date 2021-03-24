import React, { useState } from 'react'

import { NewMessageForm } from './components/NewMessageForm'
import { Messages} from './components/Messages'

export const App = () => {

  const [newMessage, setNewMessage] = useState('')
  const [messageList, setMessageList] = useState([])


  return (
    <div className='main'>
      <NewMessageForm
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
    
      <Messages
        messageList={messageList}
        setMessageList={setMessageList}
      />
    </div>

  )
}

