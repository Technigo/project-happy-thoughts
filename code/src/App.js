import React, { useState, useEffect } from 'react';
import MessageList from 'components/MessageList';
import NewMessage from 'components/NewMessage';

export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = () => {
    setLoading(true);
    fetch('https://week7-backend.herokuapp.com/tasks')
      .then((result) => result.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: newMessage
      })
    }
    fetch('https://week7-backend.herokuapp.com/tasks', options)
      .then((result) => result.json())
      .then(() => fetchTasks())
      .finally(() => setNewMessage(''));
  }

  return (
    <div>
      <NewMessage
        newMessage={newMessage}
        onNewMessageChange={handleNewMessageChange}
        onFormSubmit={onFormSubmit} />
      <MessageList
        loading={loading}
        messageList={messageList}
        setMessageList={setMessageList} />
      {/* <p>{counter}</p>
      <button type="button" onClick={handleCounterIncreaseButtonClick}>counter increase</button> */}

    </div>
  );
}