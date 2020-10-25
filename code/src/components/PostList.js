import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PostLiked from './PostLiked';

const PostList = () => {
  const POSTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  //const LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(POSTS_URL)
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data);
        const filteredData = data.filter(post => {
          return post.message;
        });
        console.log(filteredData);
        //filteredData.reverse();
        setPosts(filteredData);
      });
  }, []);

  return (
    <div>
      {posts.map(post => (
        <article key={post._id}>
          {console.log(post._id)}
          <p>
            {post.message}
            <span>{moment(post.createdAt).fromNow()}</span>
          </p>
          {/* <button onClick={onLiked(post._id)}>{post.hearts}</button> */}
          <PostLiked hearts={post.hearts} id={post._id} />
        </article>
      ))}
    </div>
  );
};

export default PostList;
