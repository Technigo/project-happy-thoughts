/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import NewPost from './NewPost';

const API = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

const Feed = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, []);

  const HandleLike = (thoughtId) => {
    fetch(`${API}/${thoughtId}/like`, { method: 'POST' })
      .then((response) => response.json())
      .then((data) => {
        const UpdateLikes = thoughtsList.map((like) => {
          if (like._id === data._id) {
            like.hearts += 1
            return like
          } else { return like }
        })
        setThoughtsList(UpdateLikes)
      })
  };

  return (
    <>
      <NewPost />
      {!loading && thoughtsList.map((thought) => {
        return (
          <div key={thought._id} className="feedWrapper">
            <p className="postText">{thought.message}</p>
            <button type="button" className={thought.hearts === 0 ? 'noLikesBtn' : 'likesBtn'} onClick={() => HandleLike(thought._id)}>
              <span role="img" aria-label="Like this post">❤️</span>
            </button>
            <span className="sumOfLikes">x {thought.hearts}</span>
            <p className="dateOfPost">Monday 12:00</p>
          </div>)
      })}
      {loading && (<div className="lds-spinner"><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>)}
    </>
  )
};

export default Feed;