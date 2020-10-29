import React from 'react'

import { MessageList } from 'components/MessageList';
import { MessageInput } from 'components/MessageInput';
// import { HappyThought } from 'components/HappyThought';

export const App = () => {
  return (
    <section className="wrapper">
      <MessageInput />
      <MessageList /> 
      {/* <HappyThought />  */}
      </section>
  )
}
