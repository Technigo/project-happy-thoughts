/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import ListThought from './ListThought';
import CreatePost from './CreatePost';
import Loading from './Loading';
import '../index.css'

const API = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'
const LIKES_URL = (id) => `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`

const AddThought = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);

  /* Fetch posts */

  const fetchPosts = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  /* Onclick event from Create post */

  const handleSubmitPosts = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newPost })
    };
    fetch(API, options)
      .then((res) => res.json())
      .then((error) => alert(`Something went wrong! 😭 Please reload and try again. The error is: ${error.errors.message.message}`))
      .then(() => {
        fetchPosts();
        setNewPost('');
      })
  }

  /* Onclick event from the ListThought */

  const handleLikes = (_id) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(LIKES_URL(_id), options)
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .finally(() => {
        fetchPosts('')
      })
  }

  return (
    <div className="main-container">
      <div>{loading && <Loading />}</div>
      <CreatePost
        handleSubmitPosts={handleSubmitPosts}
        newPost={newPost}
        setNewPost={setNewPost} />
      {posts.map((post) => (
        <ListThought key={post._id} post={post} handleLikes={handleLikes} />
      ))}
    </div>
  )
}

export default AddThought;