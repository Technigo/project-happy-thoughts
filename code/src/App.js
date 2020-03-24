import React from 'react'
import { HappyThoughts } from './HappyThoughts'
import { NewThought } from './NewThought'



export const App = () => {

  return (
    <section className="allThoughts">
      < NewThought />
      < HappyThoughts />
    </section>
  )
}






