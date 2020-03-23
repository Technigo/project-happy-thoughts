import React from 'react'
import { MessageList } from 'Components/MessageList'
import { MessageInput } from 'Components/MessageInput'


export const App = () => {

  return (
    <section className='app'>
      <MessageInput />
      <MessageList />
    </section>
  )
}

