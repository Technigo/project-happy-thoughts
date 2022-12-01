/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PostedMessage from './PostedMessage';
import NewMessage from './NewMessage';

const MessageDisplay = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch('https://project-happy-thoughts-api-tyqwqvxomq-lz.a.run.app/thoughts')
      .then((data) => data.json())
      .then((fetchedMessages) => setMessages(fetchedMessages))
      .then(console.log(messages))
      .catch((error) => console.error(error))
  }, []);

  return (
    <main>
      <section>
        <NewMessage messages={messages} />
      </section>
      <section role="feed">
        <PostedMessage messages={messages} />
      </section>
    </main>
  )
}

export default MessageDisplay