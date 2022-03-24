import React, { useState } from 'react'

import Header from 'components/Header'
import NewThought from 'components/NewThought'
import ThoughtList from 'components/ToughtList'

export const App = () => {
  const [newThought, setNewThought] = useState ('')
  const [thoughtList, setThoughtList] = useState ([])

  return (
    <>
    <div className="main-div">
      <Header />
      <NewThought newThought={newThought} setNewThought={setNewThought} />
      <ThoughtList thoughtList={thoughtList} setThoughtList={setThoughtList} />
    </div>
    </>
    
  )
}
