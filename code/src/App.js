import React from "react"

import { ThoughtList } from "components/ThoughtList"
import { ThoughtInput } from "components/ThoughtInput"

import "App.css"

export const App = () => {
  return (
    <div>
      <ThoughtInput />
      <ThoughtList />
    </div>
  )
}
