import React from 'react'
import { MessageList } from './components/MessageList'
import { MessageInput } from './components/MessageInput'
import { LikeHearts } from './components/LikeHearts'


export const App = () => {
  return (
    <div>
      <MessageInput />
      <MessageList /> 
      <LikeHearts />
    </div>
  )
}
