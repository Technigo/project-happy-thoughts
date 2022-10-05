import React, { useState, useEffect } from 'react';
// import MessagePost from './MessagePost';
import PostedMessage from './PostedMessage';
import Dummy from './Dummy';

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
        {/* <MessagePost messages={messages} />
        DUMMY IS WORKING! Name change is required */}
        <Dummy messages={messages} />
      </section>
      <section>
        <PostedMessage messages={messages} />
      </section>
    </main>
  )
}

export default MessageDisplay