import React, { useState } from 'react'
import { Messages } from './components/Messages'
import { SendMessage } from './components/SendMessage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faHeart, faPaperPlane, faSpinner)

export const App = () => {

  const [messages, setMessages] = useState([])

  return (
    <>
      <SendMessage messages={messages} setMessages={setMessages} />
      <Messages messages={messages} setMessages={setMessages} />
      <FontAwesomeIcon icon="spinner" className="fa-spin" />
    </>
  )
}
