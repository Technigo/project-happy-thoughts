import React from 'react'

import MessageList from './components/MessageList'
import Header from './components/Header'
import MessageForm from 'components/MessageForm'


export const App = () => {
  return (
    <div className="main">

      <Header />

      <MessageForm/>

      <MessageList/>

    </div>
  )
}
