import React, { useState } from 'react'
import { Messages } from './components/Messages'
import { SendMessage } from './components/SendMessage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faPaperPlane, faSpinner, faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Heart } from './img/Heart'

library.add(faHeart, faPaperPlane, faSpinner, faQuoteLeft, faQuoteRight)

export const App = () => {

  const [messages, setMessages] = useState([])

  return (
    <>
      <div><h1>happy thoughts</h1><Heart /></div>
      <em>there are so many beautiful reasons to be happy</em>
      <SendMessage messages={messages} setMessages={setMessages} />
      <Messages messages={messages} setMessages={setMessages} />
      <FontAwesomeIcon icon="spinner" className="fa-spin" />
    </>
  )
}
