/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { List } from 'components/List';
import { Input } from 'components/Input';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newPost, setNewPost] = useState([]);

  useEffect(() => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data);
      });
  }, []);

  return (
    <div>
      <Input
        thoughts={thoughts}
        setThoughts={setThoughts}
        newPost={newPost}
        setNewPost={setNewPost}
      />
      <List
        thoughts={thoughts}
        setThoughts={setThoughts}
        newPost={newPost}
        setNewPost={setNewPost}
      />
    </div>
  );
};
