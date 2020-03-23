import React from 'react'
import {Thoughts} from './Thoughts'
import {MessageInput} from './MessageInput'


export const App = () => {
  return (
    <div className="thoughts">
      <MessageInput />
      <Thoughts />
    </div>
  )
}
