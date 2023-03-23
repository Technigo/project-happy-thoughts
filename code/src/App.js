import { NewPost } from 'components/NewPost/NewPost';
import { PostList } from 'components/PostsList/PostsList';
import React, { useEffect } from 'react';
import './App.css';

export const App = () => {
  // Just for fun, delete later
  useEffect(() => {
    window.alert('❤️ Ready to share some happy thoughts? ❤️')
  }, [])

  return (
    <main className="main-wrapper">
      <NewPost />
      <PostList />
    </main>
  );
}
