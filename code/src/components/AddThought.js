/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import ListThought from './ListThought';
import CreateThought from './CreateThought';
import Loading from './Loading';

const API = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'
const LIKES_URL = (id) => `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`

const AddThought = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  /* Fetch data */

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setLoading.false)
  }

  /* Onclick event from create */

  const handleSubmitMessages = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message, name })
    };
    fetch(API, options)
      .then((res) => res.json())
      .then(() => {
        fetchData();
        setMessage('');
        setName('');
      })
  }

  /* Onclick event from the like button list */
  const handleLikes = (id) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .finally(() => {
        fetchData('')
      })
  }

  return (
    <div>
      <CreateThought
        handleSubmitMessages={handleSubmitMessages}
        message={message}
        setMessage={setMessage}
        name={setName} />
      <div>{loading && <Loading />}</div>

      {posts.map((post) => (
        <ListThought key={post._id} post={post} handleLikes={handleLikes} />
      ))}
    </div>
  )
}

export default AddThought;