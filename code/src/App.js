import React, { useState, useEffect } from 'react'
// import SendMessage from './Components/SendMessage'
import ShowMessage from './Components/ShowMessage'

export const App = () => {
  // const [showMessage, setShowMessage] = useState('')
  // const [sendMessage, setSendMessage] = useState('')
  const fetchMessages = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => console.log(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('Everything works'))
  }
  fetchMessages()
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <ShowMessage />

      </div>
    </div>
  );
}
