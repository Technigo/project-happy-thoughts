import React from 'react'
import { Thoughts } from './components/Thoughts'
import { NewThought } from './components/NewThought'

export const App = () => {

  return (
    <div>
      <NewThought />
      <Thoughts />
    </div>
  )

}
