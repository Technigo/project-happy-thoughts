/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { ThoughtForm } from 'components/ThoughtForm';
import { ThoughtList } from 'components/ThoughtList';

export const App = () => {

  const [thoughtList, setThoughtList] = useState ([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

//Fetching the latest 20 thoughts from the API
const fetchThoughts = () => {
  setLoading(true);
  fetch('https://project-happy-thoughts-api-qq5asptyza-lz.a.run.app/thoughts')
    .then((response) => response.json())
    .then((data) => setThoughtList(data.response))
    .catch((error) => console.error(error))
    .finally(() => {setLoading(false)});
}

useEffect(() => {
  fetchThoughts();
}, [])

const handleNewThoughtChange = (event) => {
  setNewThought(event.target.value)
}

//Posting a new thought to the API
const postNewThought = () => {
    const options = 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({ message: newThought })
    }; 

    fetch('https://project-happy-thoughts-api-qq5asptyza-lz.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then((data) => {
        setThoughtList((prevList) => [data, ...prevList]);
      });    
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  postNewThought();
  setNewThought('')
};

//Handle likes from users when the heart icon has been clicked. The number of likes will be increased by one every time the heart is clicked.
const handleLike = (_id) => {
  fetch(`https://project-happy-thoughts-api-qq5asptyza-lz.a.run.app/thoughts/${_id}/like`, { method: 'POST' })
  .then((response) => {
    return response.json()
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