import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PostMessage from './components/PostMessage';
import MessageList from './components/MessageList';
import Footer from './components/Footer';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState([]); // Initial state is an empty array

  // We call the messages in the API:
  const fetchPosts = () => {
    console.log(loading);
    console.log(messageList);
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  // useEffect is triggered on restart
  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-wrapper">
      <Header />
      <PostMessage />
      <MessageList loading={loading} messageList={messageList} setMessageList={setMessageList} />
      <Footer />
    </div>
  );
}

/*
The fetch for recent posts:
GET:
https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts

The post for new thoughts:
POST:
https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts

The post for likes:
POST:
https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like

*/