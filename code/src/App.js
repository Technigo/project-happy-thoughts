import React from 'react'

import { ThoughtsList } from './components/ThoughtsList'
import { ThoughtCard } from 'components/ThoughtCard'
import { ThoughtsInput } from 'components/ThoughtsInput'

export const App = () => {
  return (
    <div>
      <ThoughtsInput/>
      <ThoughtsList/>
      <ThoughtCard/>
    </div>
  )
}
