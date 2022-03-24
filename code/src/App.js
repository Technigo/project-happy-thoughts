import React, { useState } from 'react'

import Header from 'components/Header'
import NewThought from 'components/NewThought'
import ThoughtList from 'components/ToughtList'

export const App = () => {
  const [thoughtList, setThoughtList] = useState ([])
  const [newThought, setNewThought] = useState ('')

  return (
    <>
    <div>
      <Header />
      <NewThought newThought={newThought} setNewThought={setNewThought} />
      <ThoughtList thoughtList={thoughtList} setThoughtList={setThoughtList} />
    </div>
    </>
    
  )
}
