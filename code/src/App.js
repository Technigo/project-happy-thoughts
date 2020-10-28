import React from 'react'

import { ThoughtsList } from './components/ThoughtsList'
import { ThoughtsInput } from 'components/ThoughtsInput'

export const App = () => {
  return (
    <div>
      <ThoughtsInput/>
      <ThoughtsList/>
    </div>
  )
}
