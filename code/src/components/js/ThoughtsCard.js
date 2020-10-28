import React from "react"

import "../css/thoughtsCard.css"
import { ThoughtsList } from "./ThoughtsList"


export const ThoughtsCard = () => {
  return (
    <div className="thoughts-container">
      <ThoughtsList />
    </div>
  )
}
