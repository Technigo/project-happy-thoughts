/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */

// OLD URL https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts

// MY URL https://project-happy-thoughts-api-ru2v7b5sba-lz.a.run.app/thoughts

import React, { useState, useEffect } from 'react';
import MessageList from 'components/MessageList';
import NewThoughts from 'components/NewThoughts';
import AnimatedPage from 'components/AnimatedPage';
import Footer from 'components/Footer';
import './index.css';

export const App = () => {
  const [newThoughts, setNewThoughts] = useState('');
  const [newLike, setNewLike] = useState(false)
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    fetchMessages();
  }, [newLike, loading]);

  const fetchMessages = () => {
    fetch('https://project-happy-thoughts-api-ru2v7b5sba-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setMessageList(data.reponse))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false), setNewLike(false))
  }

  const handleNewThought = (event) => {
    setNewThoughts(event.target.value)
  }

  const onFormSubmit = (event) => {
    setLoading(true)
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThoughts })
    }
    fetch('https://project-happy-thoughts-api-ru2v7b5sba-lz.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then((data) => { setMessageList([data, ...messageList]) })
      .catch((error) => console.log(error))
      .finally(() => { setNewThoughts('')(setLoading(false)) });
  }

  if (loading) {
    return <p>Loading</p>
  }
  return (
    <div className="content-container">
      <NewThoughts
        newThoughts={newThoughts}
        loading={loading}
        onNewThoughtChange={handleNewThought}
        onFormSubmit={onFormSubmit}
        count={newThoughts.length} />
      <AnimatedPage>
        <MessageList
          setNewLike={setNewLike}
          loading={loading}
          setLoading={setLoading}
          messageList={messageList}
          setMessageList={setMessageList} />
      </AnimatedPage>
      <Footer />
    </div>
  );
}