import React from 'react';
import { Header } from 'components/Header/Header';
import { PostList } from './components/PostsList/PostsList';
import { NewPost } from './components/NewPost/NewPost';
import './App.css';

export const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main-wrapper">
        <NewPost />
        <PostList />
      </main>
    </>
  );
};
