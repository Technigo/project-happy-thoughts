import React from 'react'
import {Thoughts} from './Thoughts'
import {AddThoughts} from './AddThoughts.js'


export const App = () => {
  return (
    <div className="thoughts">
      <AddThoughts />
      <Thoughts />
    </div>
  )
}
