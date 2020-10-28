import React from 'react';
import { MessageList } from 'components/MessageList';
import { Thoughts } from 'components/Thoughts';

export const App = () => {
  return (
    <main>
      <Thoughts />
    <MessageList />
    </main>
  )
}
