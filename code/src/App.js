import React, { useState } from 'react'
import { Messages } from './components/Messages'
import { SendMessage } from './components/SendMessage'
import { Heart } from './img/Heart'

// FONTAWESOME ICONS

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faSpinner, faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faHeart, faSpinner, faQuoteLeft, faQuoteRight)

// APP CONSTRUCTION

export const App = () => {

  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <>
      <header><h1>happy thoughts</h1><Heart /></header>
      <em>there are so many beautiful reasons to be happy</em>
      <SendMessage messages={messages} setMessages={setMessages} />
      {loading &&
        <>
          <h2>happiness is loading</h2>
          <FontAwesomeIcon icon="spinner" className="fa-spin" />
        </>}
      <Messages messages={messages} setMessages={setMessages} setLoading={setLoading} />
    </>
  )
}
