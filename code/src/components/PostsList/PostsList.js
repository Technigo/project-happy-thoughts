import React, { useState, useEffect } from 'react';
import { SinglePost } from './SinglePost/SinglePost.js';
import './PostList.css';

export const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setPostList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, []);

  return (
    <div className="postlist">
      {!loading && postList.map((thought) => {
        // eslint-disable-next-line no-underscore-dangle
        return (
          <SinglePost
            // eslint-disable-next-line no-underscore-dangle
            key={thought._id}
            thought={thought} />
        )
      })}
      {loading && (<h2>LOADING</h2>)}

    </div>
  )
}