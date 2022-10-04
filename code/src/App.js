import React, { useState, useEffect } from 'react'
import SendMessage from './Components/SendMessage'
import ShowMessage from './Components/ShowMessage'

const api = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const App = () => {
  const [showMessage, setShowMessage] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setShowMessage(data))
      .catch((error) => console.error(error))
      .finally(() => console.log('Everything works'))
  }, [newMessage])

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <SendMessage newMessage={newMessage} setNewMessage={setNewMessage} />
        {showMessage.map(message => (
          <ShowMessage message={message.message} />
        ))}
      </div>
    </div>
  )
}