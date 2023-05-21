/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { List } from 'components/List';
import { Input } from 'components/Input';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchThoughts = () => {
    fetch('https://project-happy-thoughts-api-hgwjnnqcva-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data);
      })
      .finally(() => setLoading(false))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleLikeChange = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(
      `https://project-happy-thoughts-api-hgwjnnqcva-lz.a.run.app/thoughts${id}/like`,
      options
    )
      .catch((error) => console.log(error))
      .finally(() => fetchThoughts());
  };
  return (
    <div className="container">
      <Input
        thoughts={thoughts}
        setThoughts={setThoughts}
        newPost={newPost}
        setNewPost={setNewPost}
      />
      {loading && <p>Thoughts is loading...</p>}
      {thoughts && (
        <List
          thoughts={thoughts}
          setThoughts={setThoughts}
          handleLikeChange={handleLikeChange}
        />
      )}
    </div>
  );
};
