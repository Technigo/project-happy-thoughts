import React from 'react'
import { MessageList } from 'MessageList'
import { MessageInput } from 'MessageInput'

export const App = () => {
  return (
    <div>
      <h1>The Happy-Thought Collective</h1>
      <MessageInput />
      <MessageList />
    </div>
  )
}
