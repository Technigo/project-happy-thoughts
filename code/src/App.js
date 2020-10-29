import React from 'react'
import { MessageList } from 'components/MessageList'
import { HappyForm } from 'components/HappyForm';

export const App = () => {
  return (
    <div>
      <HappyForm />
      <MessageList />
    </div>
  )
}
