import React, { useState, useEffect } from 'react'
import { Card } from 'Card'
import { Message } from 'Message'
import { Header } from 'Header'
import { Footer } from 'Footer'


export const App = () => {
  const [thougths, setThougths] = useState([]);
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then(res => res.json())
      .then(json => {
        setThougths(json)
      }).catch((error) => {
        console.log('Error in Fetch:' + error.message);
      });
  }, [])

  return (
    <div className="main-container">
      <Header />
      <Card message={message} setMessage={setMessage} />
      {thougths && thougths.map(thougth => <Message thougth={thougth} />)}
      <Footer />
    </div>

  )
}
