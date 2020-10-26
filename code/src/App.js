import React from 'react';

import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export const App = () => {
  return (
    <div>
      <MessageList />
      <MessageInput />
    </div>
  )
}
