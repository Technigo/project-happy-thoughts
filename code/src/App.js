import React from 'react'
import { NewThoughtForm } from "./Components/NewThoughtForm"
import { ThoughtsList } from "./Components/ThoughtsList"

export const App = () => {

  return (
    <main>
      <NewThoughtForm />
      <ThoughtsList />
    </main>
  )
}
