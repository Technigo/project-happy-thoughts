/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import PostList from 'components/PostList';
import PostForm from 'components/PostForm';

export const App = () => {
  const [postList, setPostList] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setPostList(transformedData.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  // will trigger first when app starts, and every time the variable in the dependency array changes

  const onNewPostChange = (event) => {
    setNewPost(event.target.value);
  }

  const handleFormCleanup = () => {
    setNewPost('');
    setLoading(false);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newPost
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup())
  }

  if (loading) {
    return (
      <p>Page is loading</p>
    )
  }

  return (
    <div>
      <PostForm
        handleFormSubmit={handleFormSubmit}
        onNewPostChange={onNewPostChange}
        newPost={newPost} />
      <PostList
        postList={postList}
        setPostList={setPostList} />
    </div>
  );
}