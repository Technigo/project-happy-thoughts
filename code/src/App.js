import React from 'react'
import { Card } from 'components/Card'
import { MessageList } from 'components/MessageList'
import { NewMessageField } from 'components/NewMessageField'

export const App = () => {
  return (
    <main>
      <MessageList />
      <NewMessageField />
    </main>
  )
}
