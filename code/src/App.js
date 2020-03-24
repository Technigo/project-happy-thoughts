import React from 'react'
import { MessageList } from './components/MessageList'
import { MessageForm } from './components/MessageForm'

export const App = () => {

  return (
    <div>
      <MessageForm />
      <MessageList />
      
    </div>
  )
}
