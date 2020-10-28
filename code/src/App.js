import React from 'react'

import { Card } from 'components/Card'
import { MessageList } from 'components/MessageList'
import { MessageInput } from 'components/MessageInput'

export const App = () => {

  return (
    <main>
      <MessageList />
      <MessageInput />
    </main>

  )
}
