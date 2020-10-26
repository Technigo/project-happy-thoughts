import React from 'react'

import "./index.css"
import { ThoughtsCard } from "./components/js/ThoughtsCard"
import { ThoughtsStatus } from "./components/js/ThoughtsStatus"


export const App = () => {

  return (
    <div className="card">
      <ThoughtsStatus />
      <ThoughtsCard />
    </div>
  )
}
