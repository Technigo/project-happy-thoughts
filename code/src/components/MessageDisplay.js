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
      .finally(() => console.log('everything is fine'));
  }, []);
  console.log(messages)

  return (
    <main>

      <section>
        <NewMessage messages={messages} />
      </section>
      <section>
        <PostedMessage messages={messages} />
      </section>
    </main>
  )
}

export default MessageDisplay