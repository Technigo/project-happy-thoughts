import React from "react"
import GetThoughts from "./components/GetThoughts"
import PostThoughts from './components/PostThoughts'

export const App = () => {
  return (
    <div className="BoxContainer">
      <PostThoughts />
      <GetThoughts />
    </div>
  )
}
