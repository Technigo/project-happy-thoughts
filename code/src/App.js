import React, { useState } from 'react'

import { NewThoughts } from './components/NewThoughts'
import { Messages} from './components/Messages'

export const App = () => {

  const [newMessage, setNewMessage] = useState('')
  const [messageList, setMessageList] = useState([])
  const [likes, setLikes] = useState()


  return (
    <div className='main'>
    <NewThoughts
      newMessage={newMessage}
      setNewMessage={setNewMessage}
    />
    
    <Messages
      messageList={messageList}
      setMessageList={setMessageList}
      likes={likes}
      setLikes={setLikes}
    />
    </div>

  )
}

