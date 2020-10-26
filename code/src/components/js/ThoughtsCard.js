import React from "react"

import "../css/thoughtscard.css"
import { ThoughtsList } from "./ThoughtsList"


export const ThoughtsCard = () => {
  return (
    <div className="thoughts-container">
      <ThoughtsList />
    </div>
  )
}
