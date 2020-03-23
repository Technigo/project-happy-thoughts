import React from 'react'
import {Thoughts} from './Thoughts'
import {MessageInput} from './MessageInput'
import { LikeButton } from 'LikeButton'
// import {LikeButton} from './LikeButton'

export const App = () => {
  return (
    <div className="thoughts">
      <MessageInput />
      <Thoughts />
     
  
    </div>
  )
}
