import React from 'react';
import PostList from './components/PostList';
import PostInput from './components/PostInput';

export const App = () => {
  return (
    <main className="App App__grid">
      <PostInput />
      <PostList />
    </main>
  );
};
