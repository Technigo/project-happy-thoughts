import React from 'react'

import { MessageList } from './components/MessageList'
import { NewThought } from './components/NewThought'

export const App = () => {
  return (
    <>
      <NewThought />
      <MessageList />
    </>
  )
}