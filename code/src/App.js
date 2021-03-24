import React, { useState } from 'react'

import { MessageList } from './components/MessageList'
import { MessageForm } from './components/MessageForm'


export const App = () => {
const [messageList, setMessageList] = useState([]);

  return (
    <main>
    <div className="wrapper">
      < MessageForm setMessageList={setMessageList}/>
      < MessageList messageList={messageList} setMessageList={setMessageList}/>
    </div>
    </main>
  )
}
