import React, { useState, useEffect } from 'react'
import SendMessage from './Components/SendMessage'
import ShowMessage from './Components/ShowMessage'

export const App = () => {
  const [showMessage, setShowMessage] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const fetchMessages = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setShowMessage(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('Everything works'))
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <SendMessage newMessage={newMessage} setNewMessage={setNewMessage} />
        <ShowMessage message={showMessage} />
      </div>
    </div>
  )
}
