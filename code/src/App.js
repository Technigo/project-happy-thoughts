import React from 'react'

import { Published } from './components/Published'
import { NewPost } from './components/NewPost'

export const App = () => {
  return (
    <div className="app-container">
    <h1>Happy Thoughts Machine</h1>
      <NewPost />
      <Published />
    </div>
  )
}