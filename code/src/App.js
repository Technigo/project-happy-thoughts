import React from 'react'
import { MessageList } from './components/MessageList'
import { MessageForm } from './components/MessageForm'
import { LikeButton } from './components/LikeButton'
import ('app.css')

export const App = () => {

  return (
    <div>
      
      <MessageForm />
      <MessageList />
      
      
    </div>
  )
}
