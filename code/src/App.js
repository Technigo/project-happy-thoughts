import React from 'react'

import { MessageInput } from './components/MessageInput.js'
import { MessageList } from './components/MessageList.js'

export const App = () => {
  return (
    <>
      <MessageInput />
      <MessageList />
    </>
  )
}
