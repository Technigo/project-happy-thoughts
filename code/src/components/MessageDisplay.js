/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { BASE_URL } from 'url';
import PostedMessage from './PostedMessage';
import NewMessage from './NewMessage';
import LoadingComponent from './LoadingComponent';

const MessageDisplay = () => {
  const [messages, setMessages] = useState([])
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(BASE_URL)
      .then((data) => data.json())
      .then((fetchedMessages) => setMessages(fetchedMessages.thoughts))
      .catch((error) => console.error(error))
      .finally(setIsLoading(false))
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