import React from 'react'
import {MessageList} from './MessageList'
import {PostMessages} from './PostMessages'

export const App = () => {
  return (
    <div>
      <PostMessages />
      <MessageList />
     </div>
  )
}
