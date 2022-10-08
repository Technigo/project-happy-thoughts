import React, { useState, useEffect } from 'react';
import PostedMessage from './PostedMessage';
import NewMessage from './NewMessage';

const MessageDisplay = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((fetchedMessages) => setMessages(fetchedMessages))
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