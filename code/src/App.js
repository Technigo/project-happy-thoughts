import React from 'react'
import { NewThoughtForm } from "./Components/NewThoughtForm"
import { ThoughtsList } from "./Components/ThoughtsList"

export const App = () => {

  return (
    <div className="happythoughts-container">
      <NewThoughtForm />
      <ThoughtsList />
    </div>
  )
}
