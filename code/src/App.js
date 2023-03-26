/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { ThoughtForm } from 'components/ThoughtForm';
import { ThoughtList } from 'components/ThoughtList';

export const App = () => {

  const [thoughtList, setThoughtList] = useState ([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');


const fetchThoughts = () => {
  setLoading(true);
  fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
    .then((res) => res.json())
    .then((data) => setThoughtList(data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}

useEffect(() => {
  fetchThoughts();
}, [])

const handleNewThoughtChange = (event) => {
  setNewThought(event.target.value)
}

const postNewThought = () => {
    const options = 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ message: newThought })
    }; 

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((data) => {
        setThoughtList((prevList) => [data, ...prevList]);
      });    
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  postNewThought();
  setNewThought('')
};

const handleLike = (_id) => {
  fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, { method: 'POST' })
  .then((res) => {
    return res.json()
  })
  .then ((data) => {
    const updateLikes = thoughtList.map((like) => {
      if (like._id === data._id) {
        like.hearts += 1;
        return like;
      } else {
        return like;
      }
    });
    setThoughtList(updateLikes)
  })
}

  return (
    <div>
      <main>
      <ThoughtForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={handleFormSubmit}
      />
      <ThoughtList
        loading={loading}
        thoughtList={thoughtList}
        handleLike={handleLike}
      />
      </main>
    </div>
  );
}