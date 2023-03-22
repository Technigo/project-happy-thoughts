import { NewPost } from 'components/NewPost/NewPost';
import { PostList } from 'components/PostsList/PostsList';
import React from 'react';
import './App.css';

export const App = () => {
  fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')

  return (
    <main className="main-wrapper">
      <NewPost />
      <PostList />
    </main>
  );
}
