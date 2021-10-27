import React, { useState, useEffect } from 'react'
import { Card } from 'Card'
import { Message } from 'Message'
import { Header } from 'Header'
import { Footer } from 'Footer'
import { API_URL } from './utils/urls'


export const App = () => {
  const [thougths, setThougths] = useState([]);
  const [message, setMessage] = useState("");

  const fetchThougths = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {

        setThougths(json)
        console.log("fetching thougths")
      }).catch((error) => {
        console.log('Error in Fetch:' + error.message);
      });
  }

  useEffect(fetchThougths, [])


  return (
    <div className="main-container">
      <Header />
      {<Card message={message} setMessage={setMessage} thougths={thougths} setThougths={setThougths} />}
      {thougths && thougths.map((thougth, i) => {
        return <div key={"key" + i}><Message thougth={thougth} thougths={thougths} setThougths={setThougths} fetchThougths={fetchThougths} /></div>
      })}
      <Footer />
    </div>

  )
}
