import React, { useState, useEffect } from 'react';

import Header from 'components/Header';
import Feed from 'components/Feed';
// import PostItem from 'components/PostItem';
import NewPost from 'components/NewPost';
// import LikeButton from 'components/LikeButton';

export const App = () => {
  const [feed, setFeed] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPosts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setFeed(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const handleNewTodoChange = (event) => {
    setNewPost(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: newPost
      })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchPosts())
      .finally(() => setNewPost(''));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header title="Happy Thoughts" />
      <NewPost
        newTodo={newPost}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit} />
      <Feed
        loading={loading}
        taskList={feed}
        setFeed={setFeed} />
    </div>
  );
}