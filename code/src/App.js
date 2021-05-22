import React, { useState } from 'react'

import ListMessages from './components/ListMessages'
import PostMessage from './components/PostMessage'
import Header from './components/Header'

import { HAPPY_THOUGHTS_API } from './reusable/urls'

export const App = () => {
  const [userName, setUserName] = useState('')
  const [hashtag, setHashtag] = useState('')
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  const [chars, setChars] = useState(0)

  const fetchMessageList = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  const postArgument = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: messageNew, user: userName, hashtag: hashtag })
  }

  const postMessage = () => {
    fetch(HAPPY_THOUGHTS_API, postArgument)
      .then(response => response.json())
      .then(() => {
        setUserName('')
        setHashtag('')
        setMessageNew('')
        setChars(0)
        fetchMessageList(HAPPY_THOUGHTS_API)})
  }

  return (
    <>
      <Header />
      <main className="main">
        
        <PostMessage
          messageNew={messageNew}
          setMessageNew={setMessageNew}
          setMessageList={setMessageList}
          chars={chars}
          setChars={setChars}
          postMessage={postMessage}
          userName={userName}
          setUserName={setUserName}
          hashtag={hashtag}
          setHashtag={setHashtag}
        />

        <ListMessages
          messageList={messageList}
          setMessageList={setMessageList}
          fetchMessageList={fetchMessageList}
        />
      </main>
    </>
  )
}
