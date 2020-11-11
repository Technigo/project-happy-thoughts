import React, { useState, useEffect } from 'react'

import { Thoughts } from './Thoughts'
import { Input } from './Input'
import { Header } from './Header'
import { Footer } from './Footer'
import { THOUGHTS__URL } from './urls'

import './app.css'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  /* We need to use useEffect because we don't want this to rerender on 
  each refresh, only when it's neccessary and [] is updated.
  You need to use the empty array to only render on change, 
  otherwise it will contiue to do the fetch in an infinite loop */
  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = () => {
    fetch(THOUGHTS__URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setThoughts(data);
      })
  }

  const saveNewMessage = (newMessage) => {
    fetch(THOUGHTS__URL, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage })
    })
      .then(getMessages)
  }

  const likeMessage = (id) => {
    const LIKE__URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`
    fetch(LIKE__URL, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' }
    })
      .then(getMessages)
  }

  return (
    <div className="app__grid">
      <Header />
      <Input
        onMessageChange={saveNewMessage}
      />
      <Thoughts
        likeMessage={likeMessage}
        thoughts={thoughts}
      />
      <Footer />
    </div>
  )
}
