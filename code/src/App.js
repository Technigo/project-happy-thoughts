/* eslint-disabled */

import React, { useState, useEffect } from 'react';
import SendThought from './components/SendThought';
import MessageList from './components/MessageList';

const API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clickCounts, setClickCounts] = useState(0);

  //Fetch API
  const fetchMessages = () => {
    setLoading(false);
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  //UseEffect hook gets all 20 recent thoughts
  useEffect(() => {
    fetchMessages();
  }, [newMessage]);

 
  const onNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  //Post for new thought
  const onNewMessageSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newMessage
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }

    fetch(API, options)
      .then((res) => res.json())
      .then(() => fetchMessages())
      .finally(() => setNewMessage(''))
  }

   /* */

   const addLike = (id, clicks) => {
    //addLike gets an id as an argument which is the id we got from the function
    //handleLikes, which is the function posting thoughts to the API. This was we make
    //sure we are adding the like to the right thought. addLike will add +1 to the
    //amount of hearts that thought had previously and show that in the browser
    //right away without triggering a new fetch. That way the user gets inmediate
    //confirmation that the like went thru. We check if the thought.id is equal to
    //the id argument we got, and if that's the case we add +1
    const updatedLikes = messageList.map((thought) => {
      if (thought._id === id) {
        thought.hearts += 1;
      }
      return thought;
    });
    //we setThoughts again so the thoughts now show with the updated amount of hearts
    setMessageList(updatedLikes);
    //Created a State for clickCounts which will show how many time the Heart button
    //has been clicked, we get the number of clicks from the callback function in
    //ThoughtCard component and add it to the existing clickCounts
    setClickCounts(clicks + clickCounts);
  };

  

/* */ 



  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">

        <SendThought
          newMessage={newMessage}
          onNewMessageChange={onNewMessageChange}
          onNewMessageSubmit={onNewMessageSubmit} />

        <MessageList
          loading={loading}
          messageList={messageList}
          setMessageList={setMessageList}
          addLike={addLike}
           />

      </div>
    </div>

  );
}

