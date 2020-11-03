import React, { useState, useEffect } from "react";

import { MessageList } from "components/MessageList";
import { MessageInput } from "components/MessageInput";


export const App = () => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

  const [messages, setMessages] = useState([]);

  // denna funktion sätter igång att hämta nytt meddelande när messageinput är mounted
  useEffect(() => {
    fetchMessages();
  }, []);

  // fångar in array av nya meddelanden från API och uppdaterar state, res=sesultat, data=rådata från arrayen
  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => console.error(error));
  };

  // skickar nytt meddelande till API:n och fångar det senaste meddelandet
  const postSingleMessage = (newMessage) => {
    fetch(MESSAGES_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newMessage }),
    })
      .then(() => fetchMessages())
      .catch((error) => console.error(error));
  };

  // skickar in likes/ hjärtan till APIn

  const postHearts = (messageId) =>
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like`,
      {
        method: "POST",
        body: "",
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      fetchMessages();
    });
  // };

  return (
    <main>
      <MessageInput onMessageChange={postSingleMessage} />
      <MessageList messageList={messages} postHearts={postHearts}  />
      <p>Made by Sabina de Maré Technigo bootcamp 2020</p>     {/* // will be made into a Footer.js with more time // */}
   
    </main>
  );
};
