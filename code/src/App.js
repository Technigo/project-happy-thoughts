import React from 'react';
import { Messages } from './components/Messages';
import { Thoughts } from './components/Thoughts';

export const App = () => {
  return (
    <div> 
      <Thoughts />
      <Messages />
    </div>
  )
}
