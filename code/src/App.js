import React, { useState } from 'react'

import { MessageList } from './components/MessageList'
import { MessageForm } from './components/MessageForm'


export const App = () => {
const [messageList, setMessageList] = useState([]);

  return (
    <>
      < MessageForm setMessageList={setMessageList}/>
      < MessageList messageList={messageList} setMessageList={setMessageList}/>
    </>
  )
}
