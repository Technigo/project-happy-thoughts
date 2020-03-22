import React, { useState, useEffect } from 'react'
import { Messages } from './components/Messages'
import { SendMessage } from './components/Send'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faHeart, faPaperPlane, faSpinner)

export const App = () => {

  const [message, setMessage] = useState()

  return (
    <>
      <SendMessage message={message} setMessage={setMessage} />
      <Messages />
      <FontAwesomeIcon icon="spinner" className="fa-spin" />
    </>
  )
}
