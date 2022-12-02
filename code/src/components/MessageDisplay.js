/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PostedMessage from './PostedMessage';
import NewMessage from './NewMessage';
import LoadingComponent from './LoadingComponent';

const MessageDisplay = () => {
  const [messages, setMessages] = useState([])
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://project-happy-thoughts-api-tyqwqvxomq-lz.a.run.app/thoughts')
      .then((data) => data.json())
      .then(setIsLoading(false))
      .then((fetchedMessages) => setMessages(fetchedMessages.thoughts))
      .catch((error) => console.error(error))
  }, []);

  return (
    <main>
      <section>
        <NewMessage messages={messages} />
      </section>
      <section className="feed" role="feed">
        {isloading ? <LoadingComponent /> : <PostedMessage messages={messages} />}

      </section>
    </main>
  )
}

export default MessageDisplay