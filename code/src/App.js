import React from 'react';

import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { MESSAGE_URL} from './urls';

export const App = () => {
  return (
    <div>
      <MessageInput />
      <MessageList />
    </div>
  )
}
