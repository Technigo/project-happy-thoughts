/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { useState, useEffect } from 'react';
import { Post } from 'components/Post';
import { Footer } from 'components/footer/Footer';
import { Feed } from './components/Feed';
import './App.css';

export const App = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState('');

  const fetchPost = () => {
    fetch('https://happy-thoughts-xnbzjt5ahq-oc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setFeed(data.response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    fetchPost();
  }, [])

  const handleNewPost = (event) => {
    setNewPost(event.target.value)
  };

  const onPostSubmit = (event) => {
    event.preventDefault()
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newPost
      })
    }
    fetch('https://happy-thoughts-xnbzjt5ahq-oc.a.run.app/thoughts', option)
      .then((res) => res.json().response)
      .catch((error) => console.error(error))
      .then(() => fetchPost())
      .finally(() => setNewPost(''));
  };

  const onLike = (event, post) => {
    event.preventDefault()
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-xnbzjt5ahq-oc.a.run.app/thoughts/${post._id}/like`, option)
      .then((res) => res.json().response)
      .catch((error) => console.error(error))
      .then(() => fetchPost())
  };

  return (
    <>
      <h1 className="title"> InspireFeed </h1>
      <div className="backgroundBubble">
        <Post
          newPost={newPost}
          onNewPostChange={handleNewPost}
          onPostSubmit={onPostSubmit} />
        <Feed
          loading={loading}
          feed={feed}
          setFeed={setFeed}
          onLike={onLike} />
      </div>
      <Footer />
    </>
  );
}
