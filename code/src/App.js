import React from 'react'

import {Fetch} from 'FetchMessage'
import {Create} from 'CreateMessage'

export const App = () => {
  return (
    <div>
      <Create />
      <Fetch />
    </div>
  )
}
