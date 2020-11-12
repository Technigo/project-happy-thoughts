import React from 'react'

import { MessageList } from 'Components/MessageList'
import { HappyForm } from 'Components/HappyForm'

export const App = () => {
  return (
    <main>
      <HappyForm />
      <MessageList />
    </main>
  )
}
