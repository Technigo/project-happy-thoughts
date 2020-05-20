import React from 'react';
import { MessageList } from 'MessageList';
import { MessageInput } from 'MessageInput';

export const API_URL = 'https://er-project-happy-thought-api.herokuapp.com/';

export const App = () => {
  return (
    <div>
      <h1>The Happy-Thought Collective</h1>
      <MessageInput />
      <MessageList />
    </div>
  )
}
