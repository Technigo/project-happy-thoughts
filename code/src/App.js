import React from "react"
import { MessageList } from "./components/MessageList"
import { InputCard } from "./components/InputCard"

export const App = () => {
  return (
    <div>
      <InputCard />
      <MessageList />
    </div>
  )
}
