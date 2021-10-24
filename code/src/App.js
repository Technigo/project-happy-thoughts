import React, { useState, useEffect } from 'react'
import { Card } from 'Card'
import { Message } from 'Message'
import { Header } from 'Header'
import { Footer } from 'Footer'



export const App = () => {
  const [thougths, setThougths] = useState([]);
  const [message, setMessage] = useState("")

  useEffect(() => {
    console.log("primer fecth")
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
      {<Card message={message} setMessage={setMessage} thougths={thougths} setThougths={setThougths} />}
      {thougths && thougths.map((thougth, i) => {
        return <div key={"key" + i}><Message thougth={thougth} setThougths={setThougths} /></div>
      })}
      <Footer />
    </div>

  )
}
