import React from 'react'

import { MessageInput } from './components/MessageInput.js'
import { MessageList } from './components/MessageList.js'

//how is my approach in general component and logic wise? 
//how do I put all fetches in another file? import and export?

export const App = () => {
  return (
    <>
      <MessageInput />
      <MessageList />
    </>
  )
}
