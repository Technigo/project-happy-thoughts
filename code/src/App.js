import React, { useState } from 'react'

import ListMessages from './components/ListMessages'
import PostMessage from './components/PostMessage'
import Header from './components/Header'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  const [chars, setChars] = useState(0)

  return (
    <main className="main">
      <Header />

      <PostMessage
      messageNew={messageNew}
      setMessageNew={setMessageNew}
      messageList={messageList}
      setMessageList={setMessageList}
      chars={chars}
      setChars={setChars}
      />

      <ListMessages
      messageList={messageList}
      setMessageList={setMessageList}
      />
    </main>
  )
}
