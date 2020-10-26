import React, { useState, useEffect } from 'react';
import moment from 'moment';

import PostLiked from './PostLiked';
import './Styles.scss';
import Loader from './Loader';

const PostList = () => {
  const POSTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  //const LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`;
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const PostList = async () => {
      await fetch(POSTS_URL)
        .then(result => {
          return result.json();
        })
        .then(data => {
          const filteredData = data.filter(post => {
            return post.message;
          });
          console.log(filteredData);
          setPosts(filteredData);
          setLoading(false);
        })
        .catch(error => console.log('error', error));
    };
    PostList();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Loader className="loader" />
          {console.log('loading')}
        </>
      ) : (
        <>
          {posts.map(post => (
            <article className="post" key={post._id}>
              {console.log(post._id)}
              <p>{post.message}</p>
              <div>
                <p>{moment(post.createdAt).fromNow()}</p>
                <PostLiked hearts={post.hearts} id={post._id} />
              </div>
            </article>
          ))}
        </>
      )}
    </>
  );
};

export default PostList;
