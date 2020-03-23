import React from 'react'
import { ThoughtsList } from './components/Thoughts'
import { MessageInputForm } from './components/MessageInput'

export const App = () => {
  return (
    <div>
      {/* Find me in src/app.js! */}
      <MessageInputForm />
      <ThoughtsList />
      
    </div>
  )
}
