import React from 'react'
import {MessageList} from './MessageList'
import {MessageInput} from './MessageInput'
import {LikeButton} from './LikeButton'
import {Message} from 'Message'

export const App = () => {
  return (
    <div>
      <MessageInput />
      <MessageList />
      
    </div>
  )
}
