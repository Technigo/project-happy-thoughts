import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { PostList } from './components/PostsList/PostsList';
import { NewPost } from './components/NewPost/NewPost';
import './App.css';

export const App = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-kr5kua5o2a-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setPostList(data.response))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }

  const newPost = (data) => {
    setPostList([data, ...postList]);
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main-wrapper">
        <NewPost newPost={newPost} fetchThoughts={fetchThoughts} />
        <PostList postList={postList} loading={loading} />
      </main>
    </>
  );
};
