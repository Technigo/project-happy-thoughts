/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import Feed from './Feed';
import CreatePost from './CreatePost';
import Loading from './Loading';
import '../index.css'

const API = 'https://project-happy-thoughts-api-m6dxuape5q-lz.a.run.app/thoughts'
const LIKES_URL = (id) => `https://project-happy-thoughts-api-m6dxuape5q-lz.a.run.app/thoughts/${id}/like`

const Main = () => {
  const [postList, setPostList] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);

  /* Fetch posts */

  const fetchPosts = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setPostList(data.response))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchPosts()
  }, [setNewPost])

  /* Onclick event from CreatePost */

  const handleCreatePost = (event) => {
    setNewPost(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newPost })
    };
    fetch(API, options)
      .then((response) => response.json())
      .then((data) => { setPostList([data.response, ...postList]) })
      .catch((error) => alert(`Something went wrong! 😭 Please reload and try again. The error is: ${error.errors.message.message}`))
      .finally(() => setNewPost(''))
  }

  /* Onclick event from the ListThought */

  const handleLikes = (id) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then((data) => {
        const updateLikes = postList.map((post) => {
          if (post._id === data.response._id) {
            post.hearts += 1
            return post
          } else {
            return post
          }
        })
        setPostList(updateLikes)
      })
      .catch((error) => console.log(error))
  }
  return (
    <div className="main-container">
      <div>{loading && <Loading />}</div>
      <CreatePost
        onFormSubmit={onFormSubmit}
        handleCreatePost={handleCreatePost}
        newPost={newPost}
        setNewPost={setNewPost} />
      {postList.map((post) => (
        <Feed
          time={post.createdAt}
          id={post._id}
          post={post.text}
          handleLikes={handleLikes}
          hearts={post.hearts} />
      ))}
    </div>
  )
}

export default Main;