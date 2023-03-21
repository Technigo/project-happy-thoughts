/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

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
      {!loading && thoughtsList.map((thought) => {
        return (
          <div key={thought._id} className="postFeed">
            <p className="feedText">{thought.message}</p>
            <button type="button" className="likeBtn">
              <span>❤️</span>
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