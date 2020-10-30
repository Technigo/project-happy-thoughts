import React from 'react'

import { MessageList } from 'components/MessageList';
import { MessageInput } from 'components/MessageInput';

export const App = () => {
  return (
    <section className="wrapper">
      <MessageInput />
      <MessageList /> 
    </section>
  )
}
