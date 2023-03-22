import React, { useState, useEffect } from 'react';
import { Post } from './Post/Post';
import './PostList.css';

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
      })
  }, []);

  return (
    <Post />
  )
}