import React, { useState, useEffect } from 'react';
import { SinglePost } from './SinglePost/SinglePost.js';
import './PostList.css';

export const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setPostList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <section className="postlist" aria-label="List of thoughts">
      <ul>
        {!loading && postList.map((thought) => {
          return (
            // eslint-disable-next-line no-underscore-dangle
            <li key={thought._id}>
              <SinglePost
                thought={thought} />
            </li>
          )
        })}
      </ul>
      {loading && (<h2>Loading thoughts...</h2>)}
    </section>
  )
}
