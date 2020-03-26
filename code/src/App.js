import React from 'react'
import { MessageList } from './components/MessageList'
import { MessageInput } from './components/MessageInput'


export const App = () => {
  return (
    <div>
      <MessageInput />
      <MessageList />
    </div>
  )
}
