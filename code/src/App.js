import React from 'react'
import { MessageList } from './MessageList'
import { MessageInput } from './MessageInput'
import './app.css'

export const App = () => {

  return (
    <div className="app">
      <MessageInput className="message-input" />
      <MessageList className="message-list" />
    </div>
  )
}
