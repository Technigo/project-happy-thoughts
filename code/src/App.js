/* eslint-disable*/
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThought, setNewThought] = useState('')

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts();
  }, [])
  
  /*Function that posts new likes to API - CURRENTLY NOT WORKING*/
  const handleLikes = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type:': 'applicaiton/json'
      }
    }
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, options)
      .then((res) => res.json())
      .then((data) => {
        const updatedLikes = thoughtList.map((thought) => {
          if (thought._id === data,_id) {
            return {
              ...thought,
              hearts: data.hearts
            };
          }
          return thought;
        });
        setThoughtList(updatedLikes)
      })
      .catch((error) => console.error(error))
  }


  return (
    <div>
      <Header />
      <ThoughtForm />
      <ThoughtList
        loading={loading}
        thoughtList={thoughtList}
        handleLikes={handleLikes} />
    </div>
  );
}
