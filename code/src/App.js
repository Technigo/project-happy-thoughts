import React from 'react'
import { Card } from 'components/Card'
import { MessageList } from 'components/MessageList'

export const App = () => {
  return (
    <main>
      <MessageList />
    </main>

    // <main>
    //   <Card
    //     id="1234"
    //     message="Today was the day I finally decided to leave my job! Wooo!"
    //     likes="4"
    //     createdAt="10 minutes ago"
    //     liked="0"
    //   />
    //   <Card
    //     id="1234"
    //     message="Jogging is the worst! I know it keeps you healthy, but god – at what cost?"
    //     likes="3,218"
    //     createdAt="12:35"
    //     liked="1"
    //   />
    // </main>
  )
}
