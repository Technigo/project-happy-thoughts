/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import NewPost from './NewPost';

const Feed = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])

  return (
    <>
      <NewPost />
      {!loading && thoughtsList.map((thought) => {
        return (
          <div key={thought._id} className="feedWrapper">
            <p className="postText">{thought.message}</p>
            <button type="button" className="likeBtn" title="Like this post">
              <span className="heart" role="img" aria-label="like"> ❤️ </span>
            </button>
            <span className="sumOfLikes"> x {thought.hearts}</span>
            <p className="dateOfPost">Monday 12:00</p>
          </div>)
      })}
      {loading && (<div className="lds-spinner"><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>)}
    </>
  )
};

export default Feed;