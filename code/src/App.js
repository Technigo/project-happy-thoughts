import React from 'react'

import { ThoughtList } from 'components/ThoughtList'
import { ThoughtInput } from 'components/ThoughtInput'

export const App = () => {
  return (
    <div>
      <ThoughtInput/>
      <ThoughtList/>
    </div>
  )
}
