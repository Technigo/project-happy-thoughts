import React from 'react'

import Messages from 'Components.js/Messages'
import NewMessageForm from 'Components.js/NewMessageForm'



export const App = () => {

  return (
    <section>
      <NewMessageForm/>
      <Messages/>
    </section>
  )
}
