/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import MessageList from 'components/MessageList';
import NewThoughts from 'components/NewThoughts';
import AnimatedPage from 'components/AnimatedPage';
import './index.css';

export const App = () => {
  const [newThoughts, setNewThoughts] = useState('');
  const [newLike, setNewLike] = useState(false)
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchMessages();
  }, [newLike]);

  const fetchMessages = () => {
    setLoading(false)
    // const options = {
    //   method: 'GET'
    // }
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false)
        setNewLike(false)
      })
  }

  const handleNewThought = (event) => {
    setNewThoughts(event.target.value)
    setCount(event.target.value.length)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThoughts })
    }
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((result) => result.json())
      .then((data) => { setMessageList([data, ...messageList]) })
      .catch((error) => console.log(error))
      .finally(() => { setNewThoughts('')(setLoading(false))(setCount('0')) });
  }

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <div className="content-container">
      <NewThoughts
        className="NewThoughts"
        newThoughts={newThoughts}
        loading={loading}
        onNewThoughtChange={handleNewThought}
        onFormSubmit={onFormSubmit}
        count={count} />
      <AnimatedPage>
        <MessageList
          setNewLike={setNewLike}
          loading={loading}
          setLoading={setLoading}
          messageList={messageList}
          setMessageList={setMessageList} />
      </AnimatedPage>
    </div>
  );
}