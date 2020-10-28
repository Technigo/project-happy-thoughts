import React from 'react'

import MessageList from './components/MessageList'
import InputForm from './components/InputForm'

export const App = () => {
  return (
    <div>
      <InputForm />
      <MessageList />
    </div>
  )
}
