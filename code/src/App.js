import React from 'react'
import { MessageList } from "./MessageList"
import { MessageForm } from "./MessageForm"
import './app.css'


export const App = () => {
  return (
    <section className="app">
      <MessageForm />
      < MessageList />
    </section>
  )
}
