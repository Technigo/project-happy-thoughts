import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { PostList } from './components/PostsList/PostsList';
import { NewPost } from './components/NewPost/NewPost';
import './App.css';

export const App = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
  // Just for fun, delete later
  // window.alert('❤️ Ready to share some happy thoughts? ❤️')
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setPostList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const addNewPost = (newPost) => {
    setPostList([newPost, ...postList]);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main-wrapper">
        <NewPost newPost={addNewPost} fetchThoughts={fetchThoughts} />
        <PostList postList={postList} loading={loading} />
      </main>
    </>
  );
};
