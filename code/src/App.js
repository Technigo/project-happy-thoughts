import React from 'react'
import { ThoughtsList } from './ThoughtsList'
import { ThoughtInput } from './ThoughtInput'

export const App = () => {
  return (
    <div className='app'>
      <ThoughtInput />
      <ThoughtsList />
    </div>
  )
}
