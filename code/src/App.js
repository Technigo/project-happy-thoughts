import React from 'react'
import { MessageList } from './components js/MessageList.js'
import { MessageInput } from './components js/MessageInput.js'
import { Header } from './components js/Header.js'

export const App = () => {
  return (
    <div className="main">
      <Header/>
      <MessageInput/>
      <MessageList/>
</div>
  )
}