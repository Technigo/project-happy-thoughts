import React, { useState, useEffect } from 'react'
import ListThought from './ListThought';
import CreateThought from './CreateThought';
import Loading from './Loading';

const API = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'
const LIKES = (thoughtId) => `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`

const AddThought = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  /* Fetch data */
  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setLoading.false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  /* Onclick event from create */

  const handleSubmitMessages = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message, name })
    };
    fetch(API, options)
      .then((res) => res.json())
      .then((data) => {
        fetchData();
        setMessage('');
        setName('');
      })
  }

  /* Onclick event from the like button list */
  const handleLikes = (thoughtId) => {
    const options = {
      method: 'POST'
    }

    fetch(LIKES(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchData();
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
        <ListThought key={post.id} post={post} handleLikes={handleLikes} />
      ))}
    </div>
  )
}

export default AddThought;