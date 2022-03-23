import React from 'react'
import { ThoughtsList } from 'Components/ThoughtsList'
import { ThoughtsForm } from 'Components/ThoughtsForm'
export const ThoughtPage = () => {
  return (
    <div>
      <ThoughtsForm />
      <ThoughtsList />
    </div>
  )
}
