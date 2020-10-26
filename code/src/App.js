import React from 'react'

import { Published } from './components/Published'
import { NewPost } from './components/NewPost'

export const App = () => {
  return (
    <div>
      <NewPost />
      <Published />

    </div>
  )
}
